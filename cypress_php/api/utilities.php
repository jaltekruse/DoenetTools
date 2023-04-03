<?php

function assertEquals($expected, $actual, $message = "") {
  if ($expected != $actual) {
      $ret = "";
      $ret .= "Error: expected value <br>'";
      $ret .= print_r($expected, TRUE);
      $ret .= "'<br> but received <br>'";
      $ret .= print_r($actual, TRUE);
      $ret .= "'" . ($message != "" ? " - " . $message : "");
      $ret .= "<br>\n";
      throw new Exception($ret);
  }
}


class Unit_Tests {

  function init_tests() {
  }

  function expectOutputString($expected, $message="") {
    // TODO - hack to get the test output to show in the browser with styles
    header("Content-Type: text/html");
    $actual = ob_get_clean();

    assertEquals($expected, $actual, $message);
  }

  function getOutputString() {
    // TODO - hack to get the test output to show in the browser with styles
    header("Content-Type: text/html");
    $ret = ob_get_clean();
    //ob_end_clean();
    ob_start( null, 0, PHP_OUTPUT_HANDLER_CLEANABLE | PHP_OUTPUT_HANDLER_REMOVABLE);
    return $ret;
  }
}

?>