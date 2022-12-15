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

class LTI13Database implements IDatabase {
    public function findRegistrationByIssuer($iss, $clientId = null) {
        $registration = LtiRegistration::new()->setAuthLoginUrl('/lti13/launch');
        return $registration;
    }
    public function findDeployment($iss, $deploymentId, $clientId = null) {
        return LtiDeployment::new()
            ->setDeploymentId(12121212);
    }
}
?>