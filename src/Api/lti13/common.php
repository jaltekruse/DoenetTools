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

require_once "../db_connection.php";

class DoenetImsCache implements ICache
{

    private $cache;

    public function getLaunchData(string $key): ?array
    {
        $this->loadCache();

        return $this->cache[$key] ?? null;
    }

    public function cacheLaunchData(string $key, array $jwtBody): void
    {
        $this->loadCache();

        $this->cache[$key] = $jwtBody;
        $this->saveCache();
    }

    public function cacheNonce(string $nonce, string $state): void
    {
        $this->loadCache();

        $this->cache['nonce'][$nonce] = $state;
        $this->saveCache();
    }

    public function checkNonceIsValid(string $nonce, string $state): bool
    {
        $this->loadCache();

        return isset($this->cache['nonce'][$nonce]) &&
            $this->cache['nonce'][$nonce] === $state;
    }

    public function cacheAccessToken(string $key, string $accessToken): void
    {
        $this->loadCache();

        $this->cache[$key] = $accessToken;
        $this->saveCache();
    }

    public function getAccessToken(string $key): ?string
    {
        $this->loadCache();

        return $this->cache[$key] ?? null;
    }

    public function clearAccessToken(string $key): void
    {
        $this->loadCache();

        unset($this->cache[$key]);
        $this->saveCache();
    }

    private function loadCache()
    {
        if (file_exists('../../media/lti_cache.txt')) {
            $cache = file_get_contents('../../media/lti_cache.txt');
            $this->cache = json_decode($cache, true);
        } else {
            file_put_contents('../../media/lti_cache.txt', '{}');
            $this->cache = [];
        }
    
    }

    private function saveCache()
    {
        file_put_contents('../../media/lti_cache.txt', json_encode($this->cache));
    }
}

function esc($conn, $str) {
    return mysqli_real_escape_string($conn, $str);
}

class LTI13Database implements IDatabase {

    private $conn;

    public function __construct($conn) {
        $this->conn = $conn;
    }

    public function findRegistrationByIssuer($host, $clientId = null) {

        $host = esc($this->conn, $host);
        $sql = "select * from lti13_issuers where host = '$host'";
        if ($clientId) {
            $clientId = esc($this->conn, $clientId);
            $sql .= " and client_id = '$clientId'";
        }
        $result = $this->conn->query($sql);

        if ($result && $result->num_rows > 0) {
            $result = $result->fetch_assoc();

            //id | created_at | updated_at | host  | client_id | auth_login_url| auth_token_url| key_set_url| private_key| kid 
            $registration = LtiRegistration::new()
                ->setAuthLoginUrl($result['auth_login_url'])
                ->setAuthTokenUrl($result['auth_token_url'])
                ->setClientId($result['client_id'])
                ->setKeySetUrl($result['key_set_url'])
                ->setKid($result['kid'])
                ->setIssuer($host)
                ->setToolPrivateKey($result['private_key']);
            return $registration;
        } else {
            echo $this->conn->error;
            // TODO - throw error?
        }
    }

    public function findDeployment($host, $deploymentId, $clientId = null) {
        return LtiDeployment::new()
            ->setDeploymentId(12121212);
    }
}
?>