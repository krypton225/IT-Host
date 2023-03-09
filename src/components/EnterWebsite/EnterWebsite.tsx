import IEnterWebsite from "./IEnterWebsite.interface";

import { MainButton, MainTitle } from "components";

import { MainBackground } from "data/photos";

const EnterWebsite = ({ hasBackgroundImage, hasDescription }: IEnterWebsite) => {
    return (
        <div
            style={{
                paddingBlock: "4.5rem",
                backgroundImage: `${hasBackgroundImage ? `url('${MainBackground}')` : "none"}`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}>

            <MainTitle title="enter your website"
                titleColor={`${hasBackgroundImage ? "var(--white-color)" : "var(--text-darker-1)"}`}
                description="choose us to keep your business" descriptionColor="#8e8e8e" />

            <div className="container mt-5">
                <div className="row g-4">
                    <div className="col-md-8 mx-auto">
                        <input type="text" name="website-name" id="website-name" style={{ padding: "0.91rem" }}
                            className="w-100 website-name border-0 rounded-4" placeholder="Enter your website's name" />
                    </div>

                    <div className="col-md-4 d-flex justify-content-start align-items-start mx-auto">
                        <MainButton text="search" rounded={true} bg="var(--pink-color)" color="white" padding="0.91rem" />
                    </div>
                </div>

                {
                    hasDescription ?
                        (<p className="mt-3 text-white" style={{ fontSize: "0.8rem" }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quo corporis beatae nemo!
                        </p>)
                        : ""
                }
            </div>
        </div>
    );
};

export default EnterWebsite;