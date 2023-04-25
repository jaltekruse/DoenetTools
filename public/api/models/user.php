<?php
include_once "baseModel.php";

class User extends Base_Model {
    public static function userByEmail($conn, $email) {
        return parent::queryExpectingOneRow($conn,
            "SELECT 
                userId,
                screenName,
                firstName,
                lastName,
                canUpload
            FROM user
            WHERE email = '$email'
        ");
    }


    public static function userById($conn, $userId) {
        return parent::queryExpectingOneRow($conn,
            "SELECT 
                userId,
                screenName,
                firstName,
                lastName,
                canUpload
            FROM user
            WHERE userId = '$userId'
        ");
    }
}
?>