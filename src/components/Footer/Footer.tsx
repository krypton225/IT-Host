import { Footer1, Logo } from "data/photos";

const Footer = () => {
    return (
        <footer style={{ paddingBlock: "5.4rem", backgroundColor: "var(--bg-tolopea-color)" }}>
            <div className="container">
                <div className="row g-5">
                    <div className="col-md-12 col-lg-4">
                        <img src={Logo} alt="IT Host" className="mt-2" />

                        <p className="mt-3 lh-lg" style={{ fontSize: "0.8rem", color: "var(--text-gray-light)" }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Porro repellat consectetur earum. Provident rerum voluptates cupiditate quisquam officiis error.
                            Veniam tempore dolor minus, debitis alias quidem sit unde magni dignissimos!
                        </p>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <p className="mt-3 text-capitalize text-white" style={{ fontSize: "1.3rem" }}>useful links</p>

                        <div className="row mt-4 gx-4 gy-xs-4 gy-lg-0 text-capitalize"
                            style={{ fontSize: "0.9rem", color: "var(--text-gray-light)" }}>
                            <div className="col-sm-6">
                                <ul>
                                    <li>web hosting</li>
                                    <li>wordpress hosting</li>
                                    <li>VPS hosting</li>
                                    <li>cloud server</li>
                                    <li>reseller package</li>
                                    <li>dedicated hosting</li>
                                </ul>
                            </div>

                            <div className="col-sm-6">
                                <ul>
                                    <li>web hosting</li>
                                    <li>wordpress hosting</li>
                                    <li>VPS hosting</li>
                                    <li>cloud server</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="row g-0 mb-1">
                            <div className="col-3">
                                <div style={{ width: "3.5rem", height: "3.5rem", borderRadius: "1.2rem" }}>
                                    <img src={Footer1} alt="Footer 1" className="w-100 h-100 cover" style={{ borderRadius: "1.2rem" }} />
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="d-flex flex-column" style={{ fontSize: "0.8rem" }}>
                                    <p className="mb-2" style={{ color: "var(--text-gray-dark)" }}>Web Hosting for everyone</p>
                                    <p className="mt-0" style={{ color: "var(--pink-color)" }}>Oct 21, 2019</p>
                                </div>
                            </div>
                        </div>

                        <div className="row g-0 mb-1">
                            <div className="col-3">
                                <div style={{ width: "3.5rem", height: "3.5rem", borderRadius: "1.2rem" }}>
                                    <img src={Footer1} alt="Footer 1" className="w-100 h-100 cover" style={{ borderRadius: "1.2rem" }} />
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="d-flex flex-column" style={{ fontSize: "0.8rem" }}>
                                    <p className="mb-2" style={{ color: "var(--text-gray-dark)" }}>Web Hosting for everyone</p>
                                    <p className="mt-0" style={{ color: "var(--pink-color)" }}>Oct 21, 2019</p>
                                </div>
                            </div>
                        </div>

                        <div className="row g-0 mb-1">
                            <div className="col-3">
                                <div style={{ width: "3.5rem", height: "3.5rem", borderRadius: "1.2rem" }}>
                                    <img src={Footer1} alt="Footer 1" className="w-100 h-100 cover" style={{ borderRadius: "1.2rem" }} />
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="d-flex flex-column" style={{ fontSize: "0.8rem" }}>
                                    <p className="mb-2" style={{ color: "var(--text-gray-dark)" }}>Web Hosting for everyone</p>
                                    <p className="mt-0" style={{ color: "var(--pink-color)" }}>Oct 21, 2019</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;