import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import "./navbar.css";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1> The Blog</h1>
      <div className="links">
        <Link style={{color : "#f1356d"}} to="/">Home</Link>
        <Link style={{color : "#f1356d"}} to="/createArticle">New Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
