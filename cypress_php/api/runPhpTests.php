<?php
include_once '../api/db_connection.php';

// save this connection under a different name, as other scripts will initialize
// a db connection under this default name when they include db_connection.php
$db_conn = $conn;

use \Firebase\JWT\JWT;
require_once "../api/vendor/autoload.php";
$key = $ini_array['key'];

include_all_tests(".");

function include_all_tests($folder){
    foreach (glob("{$folder}/*test*.php") as $filename)
    {
        include_once($filename);
    }
}

$unit_test_classes = array();

// TODO - this currently isn't working, not sure how to access classes declared in
// an included script file, going to explicitly run the project specific tests seprately
// for now

foreach( get_declared_classes() as $class ) {
    if (in_array('Unit_Tests', class_parents($class))) {
      $unit_test_classes[] = $class;
    }
}


$old_error_handler = set_error_handler("myErrorHandler");

//$unit_test_classes[0]->init_tests();

ob_start( null, 0, PHP_OUTPUT_HANDLER_CLEANABLE | PHP_OUTPUT_HANDLER_REMOVABLE);

$_REQUEST['userId'] = 'cyuserid';
$payload = [
    // "email" => $emailaddress,
    'userId' => 'cyuserid',
    'deviceName' => "does this matter?",
    // "expires" => $expirationTime
];
$jwt = JWT::encode($payload, $key);
$_COOKIE['JWT'] = $jwt;

foreach ($unit_test_classes as $unit_tests) {
    echo "<h3>Running test class : " . $unit_tests . "</h3><br>\n";
    $reflection = new ReflectionClass(new $unit_tests);
    $unit_tests = new $unit_tests();
    try {
        $unit_tests->init($db_conn);
    } catch (Exception $ex){
        echo '<span style="color:red">Error in test init() method</span><br>';
        echo $ex->getMessage() . "<br>\n";
    }
    ob_start( null, 0, PHP_OUTPUT_HANDLER_CLEANABLE | PHP_OUTPUT_HANDLER_REMOVABLE);
    foreach ($reflection->getMethods(ReflectionMethod::IS_PUBLIC) as $method) {
        if ($method->class == $reflection->getName()) {
            if ( strpos($method->name, 'test') !== FALSE) {
                echo "<b>Running test: " . $method->name . "</b><br>\n";
                error_log("<b>Running test: " . $method->name . "</b><br>\n");
                $name = $method->name;
                try {
                    ob_start( null, 0, PHP_OUTPUT_HANDLER_CLEANABLE | PHP_OUTPUT_HANDLER_REMOVABLE);
                    $unit_tests->$name();
                    ob_start( null, 0, PHP_OUTPUT_HANDLER_CLEANABLE | PHP_OUTPUT_HANDLER_REMOVABLE);
                    echo '<span style="color:blue">SUCCESS</span><br>';
                    ob_end_flush();
                } catch (Exception $ex){
                    echo '<span style="color:red">Test Failure: </span><br>';
                    echo $ex->getMessage() . "<br>\n";
                    echo nl2br($ex->getTraceAsString()) . "<br>\n";
                }
            }
        }
    }
}
echo "<h2>All unit tests have been run.</h2><br>\n";

echo "</html>";

// modified version of code available at
// http://stackoverflow.com/questions/3316899/try-catch-with-php-warnings
function myErrorHandler($errno, $errstr, $errfile, $errline)
{
    $file_parts = explode('/', $errfile);
    $file_name = $file_parts[count($file_parts) - 1];
    switch ($errno) {
        case E_USER_WARNING:    error_log("<b>WARNING</b> [$errno] $errstr<br />\n");  break;
        case E_NOTICE:          error_log("<b>NOTICE</b> [$errno] $errstr<br />\n");   break;
        case E_USER_NOTICE:     error_log("<b>USER_NOTICE</b> [$errno] $errstr<br />\n");   break;
        case E_WARNING:         error_log("Assert failed - " . $file_name . " (" . $errline . ") - " . $errstr . "<br>\n"); break;
        default:                error_log("Unknown error type: [$errno] in file: " . $file_name . " (" . $errline . ") - " . $errstr . "<br>\n"); break;
    }
    /* Do execute PHP internal error handler */
    return false;
}

?>