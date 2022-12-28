<?php
use \Packback\Lti1p3\LtiOidcLogin;
use \Packback\Lti1p3\LtiMessageLaunch;
use \Packback\Lti1p3\LtiException;

use \Packback\Lti1p3\Interfaces\IDatabase;
use \Packback\Lti1p3\ImsStorage\ImsCache;
use Packback\Lti1p3\Interfaces\ICache;
use \Packback\Lti1p3\ImsStorage\ImsCookie;
use \Packback\Lti1p3\LtiServiceConnector;
use Packback\Lti1p3\LtiRegistration;
use Packback\Lti1p3\LtiDeployment;

use GuzzleHttp\Client;

use \Packback\Lti1p3\OidcException;
require_once "../vendor/autoload.php";
require_once "./common.php";
require_once "../db_connection.php";

        try {
            //print_r($_POST);
            //return;
            //$_POST['state'] = 'student';
            $imsCache = new DoenetImsCache();
            $launch = LtiMessageLaunch::new(new LTI13Database($conn), $imsCache, new ImsCookie(), 
                new LtiServiceConnector($imsCache, new Client(['timeout' => 30])));
            $launch->validate($_REQUEST);

            // we are validated against the LMS at this point, we can now be logged in as the user
            $launchData = $launch->getLaunchData();
            /*
            print_r($_REQUEST);
            echo '<br />';
            echo '<br />';
            print_r($launchData);
            print_r($_REQUEST);
            echo "lti 1.3 launch";
            */
            
            $_SERVER['givenName'] = 'TODO get this info from canvas';
            $_SERVER['surname'] = 'TODO get this info from canvas';
            $_SERVER['mail'] = $launchData['https://purl.imsglobal.org/spec/lti/claim/custom']['user_username'];
            require "../umn/shibToJWT.php";

        }
        catch (LtiException $e) {
            echo "Exception in lti 1.3 launch";
            echo $e->getMessage();
        }
?>