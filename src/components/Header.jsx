import React from "react";
import "../styles/header.css";

const Header = () => {  

    return (    
        <header className="header" id="header">
            <div className="header-content">
                <h1 className="header-title tracking-in-contract">CARLOLEONARDO <br/> APONTE</h1>
                <p className="header-subtitle">Escultor</p>
            </div>
        </header>
    );
}   

export default Header;

