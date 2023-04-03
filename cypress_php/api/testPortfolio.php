<?php
include_once("utilities.php");

class Portfolio_Tests extends Unit_Tests {

  function init_tests() {
    include "../api/createPortfolioCourse.php";
    $output = $this->getOutputString();
    print_r(json_decode($output));

    ob_start( null, 0, PHP_OUTPUT_HANDLER_CLEANABLE | PHP_OUTPUT_HANDLER_REMOVABLE);
    include "../api/getPortfolioCourseId.php";
    $this->porfolioCourseId = $this->getOutputString();
    ob_start( null, 0, PHP_OUTPUT_HANDLER_CLEANABLE | PHP_OUTPUT_HANDLER_REMOVABLE);
    echo $this->porfolioCourseId;
  }


  function test_addition() {
  }

  function test_getPortfolioCourseId() {

  }



}
?>