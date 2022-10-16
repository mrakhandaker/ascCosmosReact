// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import authentication from '@kdpw/msal-b2c-react';
import App from './App';

authentication.initialize({
    instance: 'https://reactb2ctenant.b2clogin.com/tfp/', 
    tenant: 'reactb2ctenant.onmicrosoft.com',
    signInPolicy: 'B2C_1_SignUpSignIn',
    applicationId: 'e9559f78-ec41-4f79-a09e-920b2dbd6011',
    cacheLocation: 'sessionStorage',
    scopes: ['profile', 'openid'],
    redirectUri: 'https://ascsa1.z26.web.core.windows.net/',
    validateAuthority: false
});

authentication.run(() => {
    ReactDOM.render(<App />, document.getElementById('root'));
});