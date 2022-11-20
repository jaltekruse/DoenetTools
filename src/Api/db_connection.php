<?php


function my_error_handler()
{
  $last_error = error_get_last();
  if ($last_error && $last_error['type']==E_ERROR)
      {
        header("HTTP/1.1 500 Internal Server Error");
        echo '...';//html for 500 page
      }
}
//register_shutdown_function('my_error_handler');

error_reporting(E_ALL);
ini_set('display_errors', 'on');

function handle_error($errno, $errstr, $errfile, $errline)
{
    error_log("!#$!@#$@#!$!@#$" .
        "<b>My ERROR</b> [$errno] $errstr<br />\n" .
        "  Fatal error on line $errline in file $errfile" .
        ", PHP " . PHP_VERSION . " (" . PHP_OS . ")<br />\n" .
        "Aborting...<br />\n");
    if (!(error_reporting() & $errno)) {
        // This error code is not included in error_reporting, so let it fall
        // through to the standard PHP error handler
        return false;
    }

    // $errstr may need to be escaped:
    $errstr = htmlspecialchars($errstr);

    switch ($errno) {
    case E_USER_ERROR:
    case E_ERROR:
        http_response_code(500);
        echo "<b>My ERROR</b> [$errno] $errstr<br />\n";
        echo "  Fatal error on line $errline in file $errfile";
        echo ", PHP " . PHP_VERSION . " (" . PHP_OS . ")<br />\n";
        echo "Aborting...<br />\n";
        exit(1);

    case E_USER_WARNING:
        //echo "<b>My WARNING</b> [$errno] $errstr<br />\n";
        break;

    case E_USER_NOTICE:
        //echo "<b>My NOTICE</b> [$errno] $errstr<br />\n";
        break;

    default:
        //echo "Unknown error type: [$errno] $errstr<br />\n";
        break;
    }

    /* Don't execute PHP internal error handler */
    return true;
}

function check_for_fatal()
{
    $error = error_get_last();
    //if ($error["type"] != 2 && $error["type"] != 8192) print_r($error);
    if ( $error["type"] == E_ERROR )
        handle_error( $error["type"], $error["message"], $error["file"], $error["line"] );
}

register_shutdown_function( "check_for_fatal" );

set_error_handler("handle_error");

$env_path = '../etc/env.ini';
$remoteuser = 'devuser';
// $remoteuser = $_SERVER[ 'REMOTE_USER' ];
// $db_temp = "cse_doenet";

if (
    $_SERVER['HTTP_HOST'] == 'localhost' ||
    $_SERVER['HTTP_HOST'] == 'localhost:3000' ||
    $_SERVER['HTTP_HOST'] == 'localhost:8080' ||
    $_SERVER['HTTP_HOST'] == 'apache' ||
    $_SERVER['HTTP_HOST'] == 'localhost:81'
) {
    $env_path = 'env.ini';
    $remoteuser = 'devuser';
}

$ini_array = parse_ini_file($env_path);

$dbhost = $ini_array['dbhost'];
$username = $ini_array['username'];
$password = $ini_array['password'];
$database = $ini_array['database'];

if (
    $_SERVER['HTTP_HOST'] == 'localhost' ||
    $_SERVER['HTTP_HOST'] == 'localhost:8080' ||
    $_SERVER['HTTP_HOST'] == 'apache' ||
    $_SERVER['HTTP_HOST'] == 'localhost:81'
) {
    $database = 'doenet_local';
    $dbhost = 'mysql';
    $_SERVER['givenName'] = "chocolate";  //For shib test on localhost
    $_SERVER['surname'] = "eclair"; //For shib test on localhost
    $_SERVER['mail'] = "eclair@doenet.org"; //For shib test on localhost
}

if ($_SERVER['HTTP_HOST'] == 'localhost:3000') {
    $dbhost = '127.0.0.1';
    $password = 'root';
}


$conn = new mysqli();

// Note: use MYSQLI_CLIENT_FOUND_ROWS
// so that can check rows_affected to determine if UPDATE queries match any records
// even if they didn't change any records
if (!$conn->real_connect($dbhost, $username, $password, $database, 3306, null, MYSQLI_CLIENT_FOUND_ROWS)) {
    die('Database Connection failed: ' . mysqli_connect_error());
}

// as of 8.1 the mysqli calls to query() will throw PHP exceptions on failure
// this restores the old behavior
// https://www.php.net/manual/en/mysqli-driver.report-mode.php
mysqli_report(MYSQLI_REPORT_OFF);

?>
