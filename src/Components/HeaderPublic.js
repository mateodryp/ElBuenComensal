import { React,useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from '../Statics/img/Logo Gris.png'

export default function HeaderPublic(){
    return(
        <div className="main_header">
             <div className="main_header_logo">
                <img src={logo} alt="Logo Gris"/>
            </div>
            <nav className="main_header_nav">
                <Link to="/" className="main_header_nav_basic">Inicio</Link>
                <Link to="/" className="main_header_nav_basic">Cómo Funciona</Link>
                <Link to="/" className="main_header_nav_basic">Menús</Link>
                <Link to="/" className="main_header_nav_basic">Restaurantes</Link>
                <div className="main_header_nav_basic_buttons">
                    <Link to="/Register" className="main_header_nav_buttons_button">Registrarse</Link>
                    <Link to="/Login" className="main_header_nav_buttons_button_paint">Iniciar Sesión</Link>
                </div>
            </nav>
        </div>
    );
}