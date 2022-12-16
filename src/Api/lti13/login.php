<?php
use \Packback\Lti1p3\LtiOidcLogin;
use \Packback\Lti1p3\LtiMessageLaunch;
use \Packback\Lti1p3\LtiException;

use \Packback\Lti1p3\Interfaces\IDatabase;
use \Packback\Lti1p3\ImsStorage\ImsCache;
use Packback\Lti1p3\Interfaces\ICache;
use \Packback\Lti1p3\ImsStorage\ImsCookie;
use Packback\Lti1p3\LtiRegistration;
use Packback\Lti1p3\LtiDeployment;

use \Packback\Lti1p3\OidcException;
require_once "../vendor/autoload.php";
require_once "./common.php";
require_once "../db_connection.php";



/*
print_r($_POST);
echo '<br />';
echo '<br />';
print_r($_REQUEST);
*/
try {
return LtiOidcLogin::new(new LTI13Database($conn), new DoenetImsCache(), new ImsCookie())
->doOidcLoginRedirect("http://doenetdev.org/lti13/launch", $_POST)
->doRedirect();
} catch (Exception $e) {
    print_r($_POST);
}

echo "lti 1.3 login"

?>