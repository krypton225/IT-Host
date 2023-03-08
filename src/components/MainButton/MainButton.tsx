import IMainButton from "./IMainButton.interface";

const MainButton = ({ text, color, bg, rounded, padding }: IMainButton) => {
    return (
        <button style={{ minWidth: "13rem", padding: `${padding}`, color: `${color}`, backgroundColor: `${bg}` }}
            className={`w-75 ${rounded ? "rounded-4" : ""} border-0 text-capitalize`}>
            {text}
        </button>
    );
};

export default MainButton;