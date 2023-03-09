import FirstColumn from "./FirstColumn/FirstColumn";
import SecondColumn from "./SecondColumn/SecondColumn";
import ThirdColumn from "./ThirdColumn/ThirdColumn";

import Copyright from "./Copyright/Copyright";

const Footer = () => {
    return (
        <footer style={{ paddingTop: "5.4rem", backgroundColor: "var(--bg-tolopea-color)" }}>
            <div className="container">
                <div className="row g-5">
                    <FirstColumn />

                    <SecondColumn />

                    <ThirdColumn />
                </div>
            </div>

            <Copyright />
        </footer>
    );
};

export default Footer;