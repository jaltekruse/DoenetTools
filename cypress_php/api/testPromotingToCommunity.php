<?php
include_once("utilities.php");
include "../api/db_connection.php";

class Community_Tests extends Unit_Tests {

  private $portfolioCourseId;

  function init($db_conn) {
    parent::init($db_conn);
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
    assertEquals($output->success, true);
    $doenetId = $output->doenetId;
    $this->checkSqlRows(1, "select doenetId from course_content where doenetId = '$doenetId'");
    
    $output->pageDoenetId;
  }

  function test_getPortfolioCourseId() {

  }

}
?>