import { MainButton, SectionHeader } from "components";
import contactInfoData from "./ContactInfo/contact-info-data";
import InputContact from "./InputContact/InputContact";

const Contact = () => {
    return (
        <div className="contact">
            <SectionHeader sectionName="contact" baseURL="home" />

            <div className="container" style={{ paddingBlock: "5.5rem" }}>
                <div className="row g-5">
                    <div className="col-lg-4">
                        <p className="fs-3 fw-semibold text-capitalize">contact info</p>

                        <p className="my-4 fs-6" style={{ color: `var(--text-gray-dark)` }}>
                            Nullam lacinia ex eleifend orci portt-itor, suscipit interdum augue condi-mentum.
                            Etiam pretium turpis eget nibh laoreet iaculis. Vivamus auctor mi eget odio feugiat.
                        </p>

                        <ul className="w-100 mt-3 d-block fw-light" style={{ fontSize: "1.1rem" }}>
                            {
                                contactInfoData.map(({ id, text, url, iconName }) => (
                                    <li key={id} className="w-100 d-block mb-3">
                                        <a href={url}>
                                            <i className={`icon ${iconName} me-2`} style={{ color: `var(--pink-color)` }}></i>
                                            <span style={{ color: "var(--text-gray-dark)" }}>{text}</span>
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="col-lg-8">
                        <form className="row g-4">
                            <div className="col-md-6">
                                <InputContact type="normal" placeHolderText="your name" />
                            </div>

                            <div className="col-md-6">
                                <InputContact type="normal" placeHolderText="your email" />
                            </div>

                            <div className="col-12">
                                <InputContact type="normal" placeHolderText="subject" />
                            </div>

                            <div className="col-12">
                                <InputContact type="txt-area" placeHolderText="message" />
                            </div>

                            <div className="col-12">
                                <MainButton text="send" setCustomWidth="13rem" rounded padding="0.7rem" bg="var(--pink-color)" color="white" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;