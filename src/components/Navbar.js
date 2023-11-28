import React from 'react';
import logo from "./logo500.png"


const Navbar = () => {
  return (
    <nav style={{marginBottom: "2rem",}}>
        <div style={{display: "flex", gap: ".5rem", alignItems: "center"}}>
            <h2 style={{color: "#fff"}}>Mini Youtube</h2>
            <img src={logo} alt='' style={{width: "50px", height: "50px"}}></img>
        </div>
    </nav >
  );
};

export default Navbar;
