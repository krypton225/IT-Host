import { MainTitle } from "components";
import PriceCard from "./PriceCard/PriceCard";
import priceData from "./price-data";

const Price = () => {
    return (
        <section style={{ paddingTop: "0" }}>
            <MainTitle title="our prices" description="prices with us is good" />

            <div className="container mt-5">
                <div className="row g-5">
                    {
                        priceData.map(({ id, titleText, price: { number, duration }, isActive, dataItemsList, bgColor }) => (
                            <div className="col-lg-4" key={id}>
                                <PriceCard titleText={titleText} price={{ number: number, duration: duration }}
                                    dataItemsList={dataItemsList} isActive={isActive} bgColor={bgColor} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Price;