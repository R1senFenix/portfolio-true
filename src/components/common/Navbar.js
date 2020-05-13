import React from "react";
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <header className="row sticky-top d-flex align-items-center">

            <a
                className="col-sm-8"
                href="https://github.com/R1senFenix/Resposive-Portfoio"
            >
                <h1>Jamison Stramer</h1>
            </a>

            <nav
                className="col-sm-4 d-inline-flex justify-content-end"
                stlye="color: gray"
            >
                <div>
                    <NavLink className="nav-link nav-color" activeClassName="active" to="/home">Home</NavLink>
                    <NavLink className="nav-link nav-color" activeClassName="active" to="/contact">Contact</NavLink>
                    <NavLink className="nav-link nav-color" activeClassName="active" to="/portfolio">Portfolio</NavLink>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;