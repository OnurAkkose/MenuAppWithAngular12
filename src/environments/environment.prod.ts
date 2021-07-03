
const baseUrl = 'http://localhost:8080/api/v1';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'Fast-Menu',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44385',
    redirectUri: baseUrl,
    clientId: 'Fast_Menu_App',
    responseType: 'code',
    scope: 'offline_access openid profile role email phone fastmenu',
  },
  apis: {
    default: {
      url: 'https://localhost:44385',
      rootNamespace: 'fastmenu',
    },
  },
}
