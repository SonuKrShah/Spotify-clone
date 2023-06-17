// import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Player from "./components/Player";
import Login from "./components/Login";
import { getTokenFromUrl } from "./config/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./components/DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  // Run the code based on the given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      // setToken(_token);
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);
      // console.log("Token Printing: ", token);
      spotify
        .getMe()
        .then((user) => {
          console.log("👨", user);
          dispatch({
            type: "SET_USER",
            user: user,
          });
        })
        .catch((error) => {
          console.error("Displaying Error: ", error);
        });

      spotify.getUserPlaylists().then((playlists) => {
        console.log("Something");
        console.log("Playlists: ", playlists);
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });

      spotify.getPlaylist("37i9dQZF1E35KnNvBJTF93").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );

      spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      // dispatch({
      //   type: "SET_SPOTIFY",
      //   spotify: s,
      // });
    }
  }, []);

  console.log("User", user);
  console.log("Token", token);

  return (
    <div className="app">
      {/* Login Page */}
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
