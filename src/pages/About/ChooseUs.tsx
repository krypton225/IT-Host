import { MainButton } from "components";

import { AboutPic } from "data/photos";

const ChooseUs = () => {
    return (
        <div className="container" style={{ paddingBottom: "6rem", paddingTop: "1.5rem" }}>
            <div className="row g-5">
                <div className="col-lg-6">
                    <p className="fw-semibold" style={{ fontSize: "1.7rem" }}>
                        Why choose our company?
                    </p>

                    <p style={{ marginBlock: "2rem" }}>
                        Nullam lacinia ex eleifend orci porttitor, suscipit interdum augue condimentum.
                        Etiam pretium turpis eget nibh laoreet iaculis. Vivamus auctor mi eget odio feugiat.
                        Quis aliquet velit ornare. Integer egestas sit amet neque sed elementum.
                        Fusce ut turpis felis. Etiam pretium pharetra augue, ac porttitor dolor consequat eget.
                        Cras tempor suscipit enim vehicula ultrices.
                        Mauris sed orci blandit, rhoncus massa non, tincidunt odio. Ut ullamcorper lobortis hendrerit.
                    </p>

                    <MainButton text="read more" rounded={true} bg="var(--pink-color)"
                        color="white" padding="0.6rem" halfWidth={true} />
                </div>

                <div className="col-lg-6">
                    <div className="w-100 h-100">
                        <img src={AboutPic} alt="About" className="w-100 h-100 cover" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;