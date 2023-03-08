import { MainButton } from "components";
import { BannerBackground } from "data/photos";

const HostSolution = () => {
    return (
        <div style={{
            paddingBlock: "4.5rem",
            backgroundImage: `url('${BannerBackground}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }}>

            <div className="container mt-5">
                <div className="row g-4">
                    <div className="col-md-8 mx-auto text-white" style={{ fontSize: "1.4rem" }}>
                        Dedicated hosting solutions only $129.99/month
                    </div>

                    <div className="col-md-4 d-flex justify-content-start align-items-start mx-auto">
                        <MainButton text="get started" rounded={true} bg="var(--pink-color)" color="white" padding="0.91rem" />
                    </div>
                </div>

                <p className="mt-3 text-white" style={{ fontSize: "0.8rem" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quo corporis beatae nemo!
                </p>
            </div>

        </div>
    );
};

export default HostSolution;