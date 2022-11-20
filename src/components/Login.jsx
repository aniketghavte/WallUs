import React from 'react';
// import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import shareVideo from '../assets/share.mp4';
import logo from '../assets/logowhite.png';
import { GoogleLogin } from '@react-oauth/google'
import jwt_decode from "jwt-decode";

import { client } from '../client';

const Login = () => {

  
  const navigate = useNavigate();
                      // const responseGoogle = (response) => {
                      //   localStorage.setItem('user', JSON.stringify(response.profileObj));
                      //   const { name, googleId, imageUrl } = response.profileObj;
                      //   const doc = {
                      //     _id: googleId,
                      //     _type: 'user',
                      //     userName: name,
                      //     image: imageUrl,
                      //   };
                        
                      //   client.createIfNotExists(doc).then(() => {
                      //     navigate('/', { replace: true });
                      //   });
                      //   console.log(response)
                      // };

  const responseGoogle = (credentialResponse) => {
       console.log(credentialResponse.credential);
       var decoded = jwt_decode(credentialResponse.credential);
       console.log(decoded);
       console.log(decoded.name);
       console.log(decoded.sub);
       console.log(decoded.picture);
       localStorage.setItem('user', JSON.stringify(decoded));

      const { name, sub, picture  } =decoded;
      const doc = {
          _id: sub,
          _type: 'user',
          userName: name,
          image: picture,
    };
      console.log(doc.image);
    client.createIfNotExists(doc).then(() => {
      navigate('/', { replace: true });
    });
    console.log(credentialResponse.credential)
  }

  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className=" relative w-full h-full">
        <video
          src={shareVideo}
          type="video/mp4"
          loops
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />

         <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0    bg-blackOverlay">
          <div className="p-5">
            <img src={logo} width="130px" />
          </div>

                                {/* <div className="shadow-2xl">
                                    <GoogleLogin
                                      clientId='53602152439-o7sj01fiks6ear6iijk3dvvroqff5uod.apps.googleusercontent.com'
                                      render={(renderProps) => (
                                        <button
                                          type="button"
                                          className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
                                          onClick={renderProps.onClick}
                                          disabled={renderProps.disabled}
                                        >
                                          <FcGoogle className="mr-4" /> Sign in with google
                                        </button>
                                      )}
                                      onSuccess={responseGoogle}
                                      onFailure={responseGoogle}
                                      cookiePolicy="single_host_origin"
                                    />
                                  </div> */}

          <GoogleLogin
            onSuccess={responseGoogle}
            onError={() => {
              console.log('Login Failed');
            }}
          />;
        </div>
      </div>
    </div>
  );
};

export default Login;