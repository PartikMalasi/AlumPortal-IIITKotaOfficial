import React from 'react';
import HomeIcon from "@mui/icons-material/Home";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PersonIcon from "@mui/icons-material/Person";
import YoutubeIcon from "@mui/icons-material/YouTube";
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const TopLayer = () => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <div className="w-full h-[1.5rem] bg-[#1A1C4E] flex px-16 max-w-980:hidden">
      <div className="h-full w-1/2 flex gap-4 justify-start items-center">
        <HomeIcon className="text-white text-xs" style={{ fontSize: "1.2rem" }} />
        <FacebookIcon className="text-white text-xs" style={{ fontSize: "1.2rem" }} />
        <XIcon className="text-white text-xs" style={{ fontSize: "1.2rem" }} />
        <InstagramIcon className="text-white text-xs" style={{ fontSize: "1.2rem" }} />
        <LinkedInIcon className="text-white text-xs" style={{ fontSize: "1.2rem" }} />
        <YoutubeIcon className="text-white text-xs" style={{ fontSize: "1.2rem" }} />
      </div>
      <div className="h-full w-1/2 flex justify-end items-center gap-2">
        <PersonIcon className="text-white text-xs" style={{ fontSize: "1.2rem" }} />
        {isLoggedIn ? (
          <p className="text-white text-sm">
            <a href="/signin" onClick={handleLogout}>
              <span className="hover:underline hover:cursor-pointer">Logout</span>
            </a>
          </p>
        ) : (
          <p className="text-white text-sm">
            <a href="/signin">
              <span className="hover:underline hover:cursor-pointer">Login</span>
            </a>{" "}
            /{" "}
            <a href="https://alumni-form-one.vercel.app/">
              <span className="hover:underline hover:cursor-pointer">Register</span>
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default TopLayer;
