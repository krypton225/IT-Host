import IMainButton from "./IMainButton.interface";

const MainButton = ({ text, color, bg, rounded, padding, halfWidth }: IMainButton) => {
    return (
        <button style={{ minWidth: "13rem", padding: `${padding}`, color: `${color}`, backgroundColor: `${bg}` }}
            className={`${halfWidth ? "w-50" : "w-75"} ${rounded ? "rounded-4" : ""} border-0 text-capitalize`}>
            {text}
        </button>
    );
};

export default MainButton;