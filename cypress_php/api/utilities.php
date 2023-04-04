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

  function init() {
  }

  function runScript($scriptFile) {
    error_log("start runScript");
    include $scriptFile;
    error_log("after include script in runScript method");
    $outputStr;
    try {
      $outputStr = $this->getOutputString();
      $ret = json_decode($outputStr);
      if (! ($ret && $ret->success)) {
        throw new Exception("Unexpected error running script " . $scriptFile . ": " . print_r($ret, true));
      }
      return $ret;
    } catch (Throwable $e) {
        throw new Exception("Unexpected error running script " . $scriptFile . " output not in JSON format: " . $outputStr);
    }
  }

  // this assumes you are running a script and expect a parsable JSON result
  function runScriptExpectError($scriptFile) {
    include $scriptFile;
    return json_decode($this->getOutputString());
  }

  function runScriptExpectUnparsableOutput($scriptFile) {
    include $scriptFile;
    return $this->getOutputString();
  }

  function expectOutputString($expected, $message="") {
    // TODO - hack to get the test output to show in the browser with styles
    header("Content-Type: text/html");
    $actual = ob_get_clean();
    ob_start( null, 0, PHP_OUTPUT_HANDLER_CLEANABLE | PHP_OUTPUT_HANDLER_REMOVABLE);

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