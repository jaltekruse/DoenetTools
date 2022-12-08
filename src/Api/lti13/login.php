<?php
use \Packback\Lti1p3\LtiOidcLogin;
use \Packback\Lti1p3\LtiMessageLaunch;
use \Packback\Lti1p3\LtiException;

use \Packback\Lti1p3\Interfaces\Database;
use \Packback\Lti1p3\LtiRegistration;
use \Packback\Lti1p3\LtiDeployment;
use \Packback\Lti1p3\OidcException;
require_once "../vendor/autoload.php";

/*
class LTI13Database implements Database {

}
*/

return LtiOidcLogin::new(null, null, null)
->doOidcLoginRedirect(url("lti13/launch"))
->doRedirect();

echo "lti 1.3 login"

?>