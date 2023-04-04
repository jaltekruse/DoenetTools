<?php
include_once("utilities.php");

class Portfolio_Tests extends Unit_Tests {

  private $portfolioCourseId;

  function init() {
    $_REQUEST["emailaddress"] = "test@test.com";
    $output = $this->runScript("../api/sendSignInEmail.php");

    error_log("start init func");
    $output = $this->runScript("../api/createPortfolioCourse.php");
    $newlyCreatedCourseId = $output->portfolioCourseId;

    $this->portfolioCourseId = $this->runScript("../api/getPorfolioCourseId.php")->portfolioCourseId;
    assertEquals($this->portfolioCourseId, $newlyCreatedCourseId);
  }

  function test_createPortfolioActivity() {
    $output = $this->runScript("../api/createPortfolioActivity.php");
  }

  function test_getPortfolioCourseId() {

  }



}
?>