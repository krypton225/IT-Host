import { useState, useEffect } from "react";

import navbarDataItemsLinks from "./navbar-data";

import { Logo } from "../../data/photos";

const MainNavbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScrolling = () => {
        if (window.scrollY > 180) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScrolling);

        return () => {
            window.removeEventListener("scroll", handleScrolling);
        };
    }, [isScrolled]);

    return (
        <nav className={`navbar navbar-expand-lg py-3 fixed-top top-0 left-0 transitions-3 ${isScrolled ? "bg-white shadow-sm" : ""}`}>
            <div className="container">
                <a href="#home" className={`${isScrolled ? "navbar-logo-invert" : ""}`}>
                    <img src={Logo} alt="IT Host" />
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {
                            navbarDataItemsLinks.map(({ id, text, url, hasButtonShape }) => (
                                <li key={id} className="nav-item">
                                    <a href={url}
                                        className={`nav-item-link block py-3 ${hasButtonShape ? "custom-link" : ""} mx-3 text-capitalize 
                                        text-decoration-none ${isScrolled ? "text-black" : "text-white"}`}>
                                        {text}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default MainNavbar;