import { MainButton } from "components";
import { MainBackground, Rocket } from "data/photos";

const Landing = () => {
    return (
        <section style={{
            backgroundImage: `url(${MainBackground})`, backgroundPosition: "center",
            backgroundRepeat: "no-repeat", backgroundSize: "cover"
        }}>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 text-white landing-text">
                        <p className="display-2 text-capitalize fw-semibold">unbeatable offers</p>

                        <p className="w-100" style={{ marginBottom: "3.5rem" }}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Fuga quisquam repellendus corporis nisi deserunt doloremque esse rerum sit amet consectetur .
                        </p>

                        <MainButton text="get your plan" bg="var(--pink-color)" color="white" rounded padding="0.6rem" setCustomWidth="13rem" />
                    </div>

                    <div className="col-lg-5">
                        <div className="w-70 landing-img animated ms-auto flex justify-content-center align-items-center">
                            <img src={Rocket} alt="Rocket" className="img-fluid cover" draggable={false} />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Landing;