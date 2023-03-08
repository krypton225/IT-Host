import ITitlePrice from "./ITitlePrice.interface";

const TitlePrice = ({ text, textColor, bgColor }: ITitlePrice) => {
    return (
        <p className="rounded-4 text-center text-uppercase fs-5 fw-semibold"
            style={{ paddingBlock: "0.5rem", color: `${textColor}`, backgroundColor: `var(${bgColor})` }}>
            {text}
        </p>
    );
};

export default TitlePrice;