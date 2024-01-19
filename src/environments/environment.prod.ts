export const environment = {
  production: true,
  keycloak: {
    // Url of the Identity Provider
    issuer: 'http://localhost:8080/',

    // Realm
    realm: 'the-last-trip',

    // The SPA's id. 
    // The SPA is registerd with this id at the auth-serverß
    clientId: 'trip',
  }
};
