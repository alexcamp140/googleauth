import { GoogleLogin } from 'react-google-login';

function Home() {

    const responseGoogle = (response) => {
      console.log(response);
    };
    
    const clientId=process.env.REACT_APP_GOOGLE_CLIENT_ID;
  
    return (
      <div className="App">
        <div>
          <h1>Authentification Google Login</h1>
          <GoogleLogin
            clientId={clientId}
            buttonText="Se connecter avec Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
          />
  
     
       </div>
      </div>
    );
  }
  
  export default Home;