<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');

require 'defineDBAndUserAndCourseInfo.php';

$success = TRUE;
$message = "";

$q = mysqli_real_escape_string($conn,$_REQUEST["q"]);

if ($q == ""){
  $success = FALSE;
  $message = 'Internal Error: missing search query';
}

$matchingUsers = [];
$matchingActivities = [];
$matchingPages = [];
//Get Matching Activities 
if ($success) {

  // Show activities from portfolios and courses that have been marked public
  $sql = "
  SELECT cc.doenetId,
  CAST(cc.jsonDefinition as CHAR) AS json,
  cc.imagePath,
  cc.label,
  cc.courseId,
  concat(u.firstName, concat(' ', u.lastName)) as fullName,
  c.portfolioCourseForUserId,
  c.label AS courseLabel,
  c.color AS courseColor,
  c.image AS courseImage
  FROM course_content AS cc
  LEFT JOIN course AS c
    ON c.courseId = cc.courseId
  LEFT JOIN user AS u 
    ON c.portfolioCourseForUserId = u.userId
  WHERE cc.label LIKE '%$q%'
  -- AND cc.type = 'activity'
  AND cc.isPublic = 1
  AND cc.isDeleted = 0
  AND cc.isBanned = 0
  LIMIT 100
  ";
  
  $result = $conn->query($sql); 
  if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()){
      $json = json_decode($row['json'], true);
      array_push($matchingActivities,[
        'type' => 'activity',
        'doenetId' => $row['doenetId'],
        'courseId' => $row['courseId'],
        'version' => $json['version'],
        'content' => $json['content'],
        'imagePath' => $row['imagePath'],
        'label' => $row['label'],
        'fullName' => $row['fullName'],
        'public' => '1',
        'isUserPortfolio' => is_null($row["portfolioCourseForUserId"]) ? "0" : "1",
        'courseLabel' => $row['courseLabel'],
        'courseColor' => $row['courseColor'],
        'courseImage' => $row['courseImage']
      ]);
    }
  }


  $sql = "
  SELECT c.courseId,
  u.firstName,
  u.lastName
  FROM user AS u
  LEFT JOIN course AS c
  ON c.portfolioCourseForUserId = u.userId
  JOIN course_content cc using(courseId)
  WHERE c.portfolioCourseForUserId IS NOT NULL
  AND cc.isPublic = 1
  AND cc.isDeleted = 0
  AND cc.isBanned = 0
  AND CONCAT(u.firstName, ' ', u.lastName) LIKE '%$q%'
  GROUP BY 
  c.courseId,
  u.firstName,
  u.userId,
  u.lastName
  LIMIT 100
  ";

  $result = $conn->query($sql); 
  if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()){
      $json = json_decode($row['json'], true);
      array_push($matchingUsers,[
        'type' => 'author',
        'courseId' => $row['courseId'],
        'firstName' => $row['firstName'],
        'lastName' => $row['lastName'],
      ]);
    }
  }

  // Show pages inside of collections/banks that have been marked public
  $sql = "
  SELECT pages.containingDoenetId,
  pages.doenetId,
  CAST(cc.jsonDefinition as CHAR) AS json,
  pages.label,
  pages.courseId,
  concat(u.firstName, concat(' ', u.lastName)) as fullName,
  c.portfolioCourseForUserId,
  c.label AS courseLabel,
  c.color AS courseColor,
  c.image AS courseImage
  FROM course_content AS cc
  LEFT JOIN course AS c
    ON c.courseId = cc.courseId
  join pages
    ON cc.doenetId = pages.containingDoenetId
  LEFT JOIN user AS u 
    ON c.portfolioCourseForUserId = u.userId
  WHERE pages.label LIKE '%$q%'
  AND cc.type = 'bank'
  AND cc.isPublic = 1
  AND cc.isDeleted = 0
  AND cc.isBanned = 0
  LIMIT 100
  ";
  
  $result = $conn->query($sql); 
  if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()){
      $json = json_decode($row['json'], true);
      $row['version'] = $json['version'];
      $row['content'] = $json['content'];
      $row['type'] ='page';
      $row['public'] = '1';
      $row['isUserPortfolio'] = is_null($row["portfolioCourseForUserId"]) ? "0" : "1";
      array_push($matchingPages, $row);
    }
  }
}



$response_arr = array(
  "success"=>$success,
  "message"=>$message,
  "searchResults"=>["users"=>$matchingUsers,"activities"=>$matchingActivities, "pages"=>$matchingPages],
  );


// set response code - 200 OK
http_response_code(200);

// make it json format
echo json_encode($response_arr);
$conn->close();

?>