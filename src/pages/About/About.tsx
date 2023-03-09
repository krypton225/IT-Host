import { MainButton, SectionHeader } from "components";
import EnterWebsite from "components/EnterWebsite/EnterWebsite";
import { AboutPic, MainBackground } from "data/photos";
import countingData from "./CountingData/counting-data";

const About = () => {
    return (
        <div className="about-us">
            <SectionHeader sectionName="about us" baseURL="home" />

            <EnterWebsite hasBackgroundImage={false} hasDescription={false} />

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
                            <MainButton text="read more" bg="var(--pink-color)" color="white" padding="0.8rem" rounded={true} halfWidth={true} />
                        </div>
                    </div>

                    <div className="row text-center" style={{ marginTop: "4rem" }}>
                        {
                            countingData.map(({ id, icon, counterNumber, title }) => (
                                <div key={id} className="col-md-6 col-lg-3">
                                    <i className={`icon ${icon}`} style={{ color: `var(--pink-color)`, fontSize: "5rem" }}></i>

                                    <div className="text-white text-capitalize">
                                        <p style={{ fontSize: "3.2rem" }}>{counterNumber}k</p>
                                        <p className="fw-semibold" style={{ marginTop: "0", fontSize: "1.2rem" }}>{title}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;