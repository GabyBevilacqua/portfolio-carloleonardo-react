import React from "react";
import "../styles/header.css";

const Header = () => {  

    return (    
        <header className="header" id="header">
            <div className="header-content">
                <h1 className="header-title tracking-in-contract">CARLOLEONARDO <br/> APONTE</h1>
                <h2 className="header-subtitle">Escultor</h2>
            </div>
        </header>
    );
}   

export default Header;

