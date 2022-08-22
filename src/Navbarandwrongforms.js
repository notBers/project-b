import './App.css';
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import './Navbarandwrongforms.css';

export default function Navbar(){

<header>
    <nav className="nav">
      <a href="/" className="logo">Portfolio</a>

      <div classNameName="hamburger">
        <span className="line" style={'display: block; width: 40px; height: 5px; margin-bottom: 10px; background-color: black;'}></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>

      <div classNameName="nav__link hide">
        <a href="#">home</a>
        <a href="#">about</a>
        <a href="#">Skills</a>
        <a href="#">blog</a>
        <a href="#">contact</a>
      </div>
    </nav>
  </header>

}