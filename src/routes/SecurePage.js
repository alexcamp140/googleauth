import { GoogleLogout,logout } from 'react-google-login';

export function SecurePage(){ 
    const clientId=process.env.REACT_APP_GOOGLE_CLIENT_ID;
    return(
        <div>
            <h1>SecurePage</h1>
            <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={logout}
      >
      </GoogleLogout>
        </div>
    )
}