import IMainButton from "./IMainButton.interface";

const MainButton = ({ text, color, bg, rounded, padding }: IMainButton) => {
    return (
        <button style={{ minWidth: "15rem", padding: `${padding}`, color: `${color}`, backgroundColor: `${bg}` }}
            className={`w-100 ${rounded ? "rounded-4" : ""} border-0 text-capitalize`}>
            {text}
        </button>
    );
};

export default MainButton;