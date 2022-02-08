import React from "react";
import './NavBar.css';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';


export default function NavBar() {
    return(

        <AppBar position="static">
            <nav>
                <div className="container-logo">
                    <img></img>
                    <h1>Velas</h1>
                </div>
                <ul className="navBar-items">
                  
                    <li><Button color="inherit">Home</Button></li>
                    <li><Button color="inherit">Productos</Button></li>
                    <li><Button color="inherit">Quienes somos</Button></li>
                    <li><Button color="inherit">Contacto</Button></li>
                </ul>
            </nav>
        </AppBar>
    )
}