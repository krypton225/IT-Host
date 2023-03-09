import FirstColumn from "./FirstColumn/FirstColumn";
import SecondColumn from "./SecondColumn/SecondColumn";
import ThirdColumn from "./ThirdColumn/ThirdColumn";

const Footer = () => {
    return (
        <footer style={{ paddingBlock: "5.4rem", backgroundColor: "var(--bg-tolopea-color)" }}>
            <div className="container">
                <div className="row g-5">
                    <FirstColumn />

                    <SecondColumn />

                    <ThirdColumn />
                </div>
            </div>
        </footer>
    );
};

export default Footer;