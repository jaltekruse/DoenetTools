<?php

class Base_Model {

    /**
     */
    public static function queryFetchAssocAsPreparedStatement($pdo, $params, $query) {

        //echo $query;
        $stmt = $pdo->prepare($query);
        /*
        $stmt->fetch(PDO::FETCH_ASSOC);
        foreach ($params as $key => &$val) {
            $conn->bindParam($key, $val);
        }
        */
        try {
            $stmt->execute();
            $result = true;
            //echo " executed statements DAFSADFASDFASDFASDFASDF";
        } catch (Exception $ex) {
            // TODO - clean this up
            //echo " exception DAFSADFASDFASDFASDFASDF";
            throw $ex;
        }
        if (!$result) {
            //echo " no results DAFSADFASDFASDFASDFASDF";
            $errorId = uniqid();
            error_log("Error occurred " . $errorId  .
                      //"\n " . $conn->error .
                      "\n" . $query);
            throw new Exception(
                "Unexpected internal error occurred, please provide this error id to the doenet team " . $errorId);
        } else {
            //echo " get results DAFSADFASDFASDFASDFASDF";
            //
            //$rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
            $rows = $stmt->fetchAll();

            //print_r($rows);
            /*
            while ($row = $stmt->fetch()) {
                $rows[] = $row;
            }
            */

            // https://stackoverflow.com/questions/66401491/uncaught-error-call-to-undefined-method-mysqli-stmtfetchall
            // https://stackoverflow.com/questions/39475325/why-doesnt-mysqli-library-natively-support-named-parameters
            //$rows = $stmt->fetchAll(FETCH_ASSOC);
            // TODO - refactor for PDO preparted statements
            // https://www.php.net/manual/en/pdostatement.getcolumnmeta.php
            /*
            //$fieldInfo = $stmt->fetch_fields();
            foreach ($fieldInfo as $field) {
                // TODO - maybe add defensive check for the "BIT" type here
                if ($field->type == 'TINYINT' && $field->length == 1) {
                    foreach($rows as $row) {
                        // "showSolution" => nullishCoalesce($row['showSolution'], "1") == '1' ? true : false,
                        $row[$field->name] = nullishCoalesce($row[$field->name], "1") == '1' ? true : false;
                    }
                }
            }
            */
            return $rows;
        }
    }

    /**
     * Execute a SQL query, returning the results as an array of associative arrays.  
     * 
     * If query returns no results, return empty array. 
     * 
     * If the query has an error, logs the specific error, a uniquely generated error ID,
     * and the query that failed. In this case it also throws an expection
     * safe to show to users reporting a generic interal error, with the unique error id.
     */
    public static function queryFetchAssoc($conn, $query) {
        return Base_Model::queryFetchAssocAsPreparedStatement($conn, [], $query);
    }

    /**
     * Runs a SQL query, returning a single row result as an associative array.
     * 
     * If no rows are returned by the query, returns null.
     * 
     * If more than one row is returned, throws an exception.
     */
    public static function queryExpectingOneRow($conn, $query) {
        $rows = Base_Model::queryFetchAssoc($conn, $query);

        if (count($rows) == 1) {
            return $rows[0];
        } else if (count($rows) == 0) {
            return null;
        } else {
            throw new Exception("Unexpected error, only expected one row from this query.");
        }
    }

    /**
     * Validate that a list of keys are present in a given associative array.
     * 
     * Can be used to validate any of the standard PHP input arrays like
     * $_POST, $_GET, $_REQUEST, $_COOKIE.
     * 
     * Inputs:
     * $inputArray     Assumed to be input from a user to be validated, needs
     *                 to be an associatve array
     * $requiredKeys   A list of keys that are required to be present. 
     */
    public static function checkForRequiredInputs($inputArray, $requiredKeys) {
        foreach($requiredKeys as $key) {
            if (!array_key_exists($key, $inputArray)) {
                throw new Exception("Missing required field '$key'.");
            }
        }
    }
}
?>
