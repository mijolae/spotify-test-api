import React, { useEffect, useState } from 'react';
// import Quiz from './Quiz';
// import Results from './Results';
// import axios from 'axios';
import './Login.css';
import MainPage from './MainPage';

const Login = () => {
  const CLIENT_ID = '527cea77524647c084bece1e8c7e1279';
  const REDIRECT_URI = 'https://localhost:3000'; // should redirect to connectwithohm.com/spotifyquiz
  const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
  const RESPONSE_TYPE = 'token';

  const REACT_APP_SPOTIFY_SCOPES =
    'user-read-private user-read-email user-library-read user-top-read';

  const [token, setToken] = useState(''); // this needs to be stored elsewhere

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem('token');

    if (!token && hash) {
      token = hash
        .substring(1)
        .split('&')
        .find((elem) => elem.startsWith('access_token'))
        .split('=')[1];

      window.location.hash = '';
      window.localStorage.setItem('token', token);
    }

    setToken(token);
  }, []);

  //   const getUserTopItems = async () => {
  //     const { data } = await axios.get(
  //       'https://api.spotify.com/v1/recommendations/available-genre-seeds',
  //       {
  //         headers: {
  //           Accept: 'application/json',
  //           'Content-Type': 'application/json',
  //           Authorization: 'Bearer ' + token,
  //         },
  //         method: 'GET',
  //       }
  //     );

  //     console.log(data);
  //   };

  return (
    <div className='login-body'>
      {!token && (
        <div>
          <h1>Welcome to My Website</h1>
          <p id='homepage-text' className='homepage_text'>
            Find your Christmas wishlist based on your top artists and songs.
          </p>
          <a
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&scope=${encodeURIComponent(
              REACT_APP_SPOTIFY_SCOPES
            )}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
            className='login_button'
          >
            Login to Spotify
          </a>
        </div>
      )}
      {/* {token && <MainPage />} */}
    </div>
  );
};

export default Login;
// {
//   /* </div>
//       <p>we make experiences happen.</p>
//       {!token && (
//         <a
//           href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&scope=${encodeURIComponent(
//             REACT_APP_SPOTIFY_SCOPES
//           )}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
//         >
//           <button>Try Spotify Quiz</button>
//         </a>
//       )}
//       {token && <button onClick={getUserTopItems}>Get Top Tracks</button>}</div> */
// }
