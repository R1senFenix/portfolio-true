import React from "react";

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
                <a className="nav-link nav-color" href="index.html">About</a>
                <a className="nav-link nav-color" href="portfolio.html">Portfolio</a>
                <a className="nav-link nav-color active" href="contact.html">Contact</a>
            </nav>
        </header>
    );
}

export default NavBar;