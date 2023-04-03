<?php
include_all_tests(".");

function include_all_tests($folder){
    foreach (glob("{$folder}/*test*.php") as $filename)
    {
        include_once($filename);
    }
}

$unit_test_classes = array(
  new Portfolio_Tests()
);

// TODO - this currently isn't working, not sure how to access classes declared in
// an included script file, going to explicitly run the project specific tests seprately
// for now
/*
foreach( get_declared_classes() as $class ) {
    if ($class instanceof Unit_Tests) {
      $unit_test_classes[] = $class;
      echo $class;
    }
}
*/

$old_error_handler = set_error_handler("myErrorHandler");

//$unit_test_classes[0]->init_tests();

ob_start();
header("Content-Type: text/html");
echo "<html>";

foreach ($unit_test_classes as $unit_tests) {
    $reflection = new ReflectionClass($unit_tests);
    $unit_tests->init_tests();
    foreach ($reflection->getMethods(ReflectionMethod::IS_PUBLIC) as $method) {
        if ($method->class == $reflection->getName()) {
            if ( strpos($method->name, 'test') !== FALSE) {
                echo "<b>Running test: " . $method->name . "</b><br>\n";
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
        case E_USER_WARNING:    echo "<b>WARNING</b> [$errno] $errstr<br />\n";  break;
        case E_USER_NOTICE:     echo "<b>NOTICE</b> [$errno] $errstr<br />\n";   break;
        case E_WARNING:         echo "Assert failed - " . $file_name . " (" . $errline . ") - " . $errstr . "<br>\n"; break;
        default:                echo "Unknown error type: [$errno] in file: " . $file_name . " (" . $errline . ") - " . $errstr . "<br>\n"; break;
    }
    /* Do execute PHP internal error handler */
    return false;
}

?>