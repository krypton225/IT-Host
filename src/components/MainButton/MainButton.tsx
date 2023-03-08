import IMainButton from "./IMainButton.interface";

const MainButton = ({ text, color, bg, rounded }: IMainButton) => {
    return (
        <button style={{ color: `${color}`, backgroundColor: `${bg}` }}
            className={`${rounded ? "rounded-4" : ""}`}>
            {text}
        </button>
    );
};

export default MainButton;