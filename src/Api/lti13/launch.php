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

        try {
            //print_r($_POST);
            //return;
            //$_POST['state'] = 'student';
            $launch = LtiMessageLaunch::new(new LTI13Database(), new DoenetImsCache(), new ImsCookie())
            ->validate($_REQUEST);

            echo "lti 1.3 launch";
        }
        catch (LtiException $e) {
            echo "Exception in lti 1.3 launch";
            echo $e->getMessage();
        }


?>