<?php
include_once "baseModel.php";

class CourseItem extends Base_Model {

    public static function getSingleAssignment($conn, $doenetId) {
        $row = parent::queryExpectingOneRow($conn,
        "SELECT assignedDate,
		dueDate,
		pinnedAfterDate,
		pinnedUntilDate,
		timeLimit,
		numberOfAttemptsAllowed,
		attemptAggregation,
		totalPointsOrPercent,
		gradeCategory,
		individualize,
		showSolution,
		showSolutionInGradebook,
		showFeedback,
		showHints,
		showCorrectness,
		showCreditAchievedMenu,
		paginate,
		showFinishButton,
		proctorMakesAvailable,
		autoSubmit
		FROM assignment
        WHERE doenetId='$doenetId'
		");

        $assignmentSettings = [
            "assignedDate" => $row["assignedDate"],
            "pinnedAfterDate" => $row["pinnedAfterDate"],
            "pinnedUntilDate" => $row["pinnedUntilDate"],
            "dueDate" => $row["dueDate"],
            "timeLimit" => $row["timeLimit"],
            "numberOfAttemptsAllowed" => $row["numberOfAttemptsAllowed"],
            "attemptAggregation" => $row["attemptAggregation"],
            "totalPointsOrPercent" => $row["totalPointsOrPercent"],
            "gradeCategory" => $row["gradeCategory"],
            "individualize" => $row["individualize"] == "1" ? true : false,
            "showSolution" => $row["showSolution"] == "1" ? true : false,
            "showSolutionInGradebook" =>
                $row["showSolutionInGradebook"] == "1" ? true : false,
            "showFeedback" => $row["showFeedback"] == "1" ? true : false,
            "showHints" => $row["showHints"] == "1" ? true : false,
            "showCorrectness" => $row["showCorrectness"] == "1" ? true : false,
            "showCreditAchievedMenu" =>
                $row["showCreditAchievedMenu"] == "1" ? true : false,
            "paginate" => $row["paginate"] == "1" ? true : false,
            "showFinishButton" => $row["showFinishButton"] == "1" ? true : false,
            "proctorMakesAvailable" =>
                $row["proctorMakesAvailable"] == "1" ? true : false,
            "autoSubmit" =>
                $row["autoSubmit"] == "1" ? true : false,
        ];
    }

}
?>