import React from 'react';
import './Sidebar.css';
import logo from "../assets/Spotify_Logo_RGB_White.png";
import SidebarOption from './SidebarOption';
// import HomeIcon from '@mui/icons-material/Home';
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { useDataLayerValue } from "./DataLayer";


export default function Sidebar() {

  const [{ playlists }, dispatch] = useDataLayerValue();
  console.log(playlists);
  return (
    <div className='sidebar'>
      <img src={logo} alt="" className='sidebar__logo'/>

      {/* Sidebar Options */}
      {/* <HomeIcon /> */}
      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
      
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))}
    </div>
  )
}
