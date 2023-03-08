import IPriceCard from "./IPriceCard.interface";

import TitlePrice from "../TitlePrice/TitlePrice";

const PriceCard =
    ({ titleText, price: { number, duration }, dataItemsList, isActive, bgColor }: IPriceCard) => {
        return (
            <>
                <TitlePrice text={titleText} textColor="white" bgColor={bgColor} />

                <div className={`price-card rounded-4 ${isActive ? "shadow-lg" : ""}`}
                    style={{
                        paddingBlock: "2.4rem",
                        border: `${isActive ? "2px solid var(--pink-color)" : ""}`,
                        backgroundColor: `#eef6f9`
                    }}>
                    <div className={`price-card__body text-center`}>
                        <p>
                            <span style={{ fontSize: `3rem` }}>${number}</span>
                            <span>/{duration}</span>
                        </p>

                        <ul className="w-100">
                            {
                                dataItemsList.map((item) => (
                                    <li key={item}>{item}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

            </>
        );
    };

export default PriceCard;