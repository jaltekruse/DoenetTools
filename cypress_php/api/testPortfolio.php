<?php
include_once("utilities.php");

class Portfolio_Tests extends Unit_Tests {

  private $portfolioCourseId;

  function init_tests() {
    include "../api/createPortfolioCourse.php";
    $output = $this->getOutputString();
    $newlyCreatedCourseId = json_decode($output)->portfolioCourseId;
    error_log($output);

    include "../api/getPorfolioCourseId.php";
    $output = $this->getOutputString();
    error_log(json_decode($output)->portfolioCourseId);
    $this->portfolioCourseId = json_decode($output)->portfolioCourseId;
    assertEquals($this->portfolioCourseId, $newlyCreatedCourseId);
  }


  function test_addition() {
  }

  function test_getPortfolioCourseId() {

  }



}
?>