import React from 'react';
import "./Login.css";
import spotifyLogo from "../assets/Spotify_Logo_RGB_White.png";
import { Link } from 'react-router-dom';
import { loginUrl } from '../config/spotify';

function Login() {
  return (
    <div className='login'>   
       
        {/* Spotify Logo */}
        <img src={spotifyLogo} alt="Logo" className='login__image'/>
        {/* Login with spotify button */}
        <Link to={loginUrl} className='login__button'>LOGIN WITH SPOTIFY</Link>
    </div>
  )
}

export default Login