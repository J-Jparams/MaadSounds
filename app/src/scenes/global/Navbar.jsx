import React from "react";
import { Outlet } from "react-router-dom";
import img from "../../assets/icon.png";
import { Link } from 'react-router-dom';
import { useState } from "react";
import Search from "../../components/Search";
import { useDispatch, useSelector } from "react-redux";
// style
import "../../styles/navbar.css";
// icons
import {
  SearchOutlined,
  ShoppingBagOutlined,
  MenuRounded,
} from "@mui/icons-material";
// component imports
import { useNavigate } from "react-router-dom";
import { setIsCartOpen } from "../../redux";
import { IconButton, Badge } from "@mui/material";


function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);






const [showSearch, setShowSearch] = useState(false);

const handleButtonClick = () => {
    setShowSearch(!showSearch);
}



  return (
    <div>
      <div className="My-Navbar">
        <div className="My-Navbar-Links">
          {/* Responsive Menu */}
          <input type={"checkbox"} id="chkbx" />
          <label for="chkbx" className="chkboxIcon">
            <MenuRounded />
          </label>
          {/* Responsive Menu */}
          {/* Apple Icon */}
          <a
            href="/"
            style={{
              fontFamily: "Baskerville Old Face",
              fontSize: 22,
              fontWeight: "500",
            }}
            className="My-Navbar-Brand"
          >
            <img src={img} alt="" width={30} height={30} />
          </a>
          <div className="My-Navbar-Links-A">
            <Link to="/explore" className="cursor-pointer opacity-75 transition hover:opacity-100">Explore</Link>
            <Link to="/beats" className="cursor-pointer opacity-75 transition hover:opacity-100">Beats</Link>
            <Link to="/business" className="cursor-pointer opacity-75 transition hover:opacity-100">Business</Link>
           <Link to="/support" className="cursor-pointer opacity-75 transition hover:opacity-100">Support</Link>
            
          </div>
          <div className="My-Navbar-Links">
            <button onClick={handleButtonClick}>
              <SearchOutlined  />
              <div style={{display: showSearch ? 'block' : 'none', float: 'left'}}>
                <Search />
              </div>
            </button>
             <Badge
              badgeContent={cart.length}
              color="secondary"
              invisible={cart.length === 0}
              sx={{
                "& .MuiBadge-badge": {
                  right: 5,
                  top: 5,
                  padding: "0 4px",
                  height: "14px",
                  minWidth: "13px",
                }
              }}
             >   
             <IconButton onClick={() => dispatch(setIsCartOpen({}))} sx={{ color: "black"}}>
              <ShoppingBagOutlined />
            </IconButton>
            </Badge>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Navbar;