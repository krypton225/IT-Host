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

            <div className="google-map-code" style={{ width: "100vw", height: "100vh" }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
                    width="100%" height="100%" frameBorder="0" style={{ border: 0 }} allowFullScreen={true} aria-hidden="false" tabIndex={0}></iframe>
            </div>
        </div>
    );
};

export default Contact;