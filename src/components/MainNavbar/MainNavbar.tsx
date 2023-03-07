import navbarDataItemsLinks from "./navbar-data";

import { Logo } from "../../data/photos";

const MainNavbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top py-3">
            <div className="container">
                <a href="#home">
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
                                        className={`${hasButtonShape ? "custom-link" : ""} mx-2 fw-semibold text-capitalize`}>
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