import { MainButton } from "components";

import { MainBackground } from "data/photos";

import countingData from "./CountingData/counting-data";

const Counting = () => {
    return (
        <div className="counting"
            style={{
                paddingBlock: "6rem",
                backgroundImage: `url('${MainBackground}')`,
                backgroundRepeat: "no-repeat", backgroundSize: "cover"
            }}>

            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-lg-9">
                        <p className="text-white" style={{ width: "94%", fontSize: "1.1rem" }}>
                            Nullam lacinia ex eleifend orci porttitor, suscipit interdum augue condimentum.
                            Etiam pretium turpis eget nibh laoreet iaculis. Vivamus auctor mi eget odio feugiat,
                            quis aliquet velit ornare. Integer egestas sit amet neque sed elementum.
                        </p>
                    </div>

                    <div className="col-lg-3">
                        <MainButton text="read more" bg="var(--pink-color)" color="white"
                            padding="0.8rem" rounded={true} halfWidth={true} />
                    </div>
                </div>

                <div className="row text-center" style={{ marginTop: "4rem" }}>
                    {
                        countingData.map(({ id, icon, counterNumber, title }) => (
                            <div key={id} className="col-md-6 col-lg-3">
                                <i className={`icon ${icon}`}
                                    style={{ color: `var(--pink-color)`, fontSize: "5rem" }}>
                                </i>

                                <div className="text-white text-capitalize">
                                    <p style={{ fontSize: "3.2rem" }}>{counterNumber}k</p>
                                    <p className="fw-semibold"
                                        style={{ marginTop: "0", fontSize: "1.2rem" }}>{title}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    );
};

export default Counting;