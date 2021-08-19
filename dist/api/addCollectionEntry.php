<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: access');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Credentials: true');
header('Content-Type: application/json');

include 'db_connection.php';

$jwtArray = include 'jwtArray.php';
$userId = $jwtArray['userId'];

$success = true;

//required unless data is passed in application/x-www-form-urlencoded or multipart/form-data
$_POST = json_decode(file_get_contents('php://input'), true);

//TODO: verify should be a util method
if (!array_key_exists('entryId', $_POST)) {
    $success = false;
    $message = 'Missing entryId';
} elseif (!array_key_exists('variant', $_POST)) {
    $success = false;
    $message = 'Missing variant';
} elseif (!array_key_exists('entryDoenetId', $_POST)) {
    $success = false;
    $message = 'Missing entryDoenetId';
} elseif (!array_key_exists('collectionDoenetId', $_POST)) {
    $success = false;
    $message = 'Missing collectionDoenetId';
}

if ($success) {
    $doenetId = mysqli_real_escape_string($conn, $_POST['collectionDoenetId']);
    $entryDoenetId = mysqli_real_escape_string($conn, $_POST['entryDoenetId']);
    $entryId = mysqli_real_escape_string($conn, $_POST['entryId']);
    $variant = mysqli_real_escape_string($conn, $_POST['variant']);

    //get driveId from doenetId
    //TODO: should be a sql join query with userId
    $sql = "
        SELECT driveId
        FROM `drive_content`
        WHERE doenetId = '$doenetId'
    ";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $driveId = $row['driveId'];
    }

    if (array_key_exists('driveId', get_defined_vars())) {
        //check user has permission to edit drive
        $sql = "
            SELECT canChangeAllDriveSettings
            FROM drive_user
            WHERE userId = '$userId'
            AND driveId = '$driveId'
        ";
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $canAdd = $row['canChangeAllDriveSettings'];
            if (!$canAdd) {
                http_response_code(403); //User if forbidden from operation
                $success = false;
                $message = 'No permission to add';
            }
        } else {
            //Fail because there is no DB row for the user on this drive so we shouldn't allow an add
            http_response_code(401); //User has bad auth
            $success = false;
            $message = 'Database rejected update';
        }
    } else {
        //bad doenetId
        http_response_code(400);
        $success = false;
        $message = 'Bad doenetId'; //TODO: is this ok to say??
        echo json_encode(['message' => $message, 'success' => $success]);
    }

    if ($success) {
        $sql = "
            INSERT INTO collection
            (collectionDoenetId, entryDoenetId, entryId, variant)
            VALUES ('$doenetId', '$entryDoenetId','$entryId','$variant')
        ";
        $result = $conn->query($sql);

        http_response_code(200);
        echo json_encode(['message' => $message, 'success' => $success]);
    }
} else {
    http_response_code(400);
    echo json_encode(['message' => $message, 'success' => $success]);
}

$conn->close();

?>