import { MainTitle } from "components";

import faqData from "./faq-data";

const FaqServices = () => {
    return (
        <section>
            <MainTitle title="FQA" description="the best out there" />

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="accordion accordion-flush" id="accordionServices">
                            {faqData.map((
                                { id, borderRadius, customID, dataTargetBS, headerTitle, accBody: { title, description, image } }) => (

                                <div key={id} className="accordion-item mt-5">
                                    <h2 className="accordion-header" id={`flush-${customID}`} style={{ borderRadius: `${borderRadius}` }}>
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse" data-bs-target={`#flush-${dataTargetBS}`}
                                            aria-expanded="false" aria-controls={`flush-${dataTargetBS}`} style={{
                                                borderRadius: `${borderRadius}`,
                                                background: "linear-gradient(to right, #2e1779 0%, #0a0228 100%)", color: "white"
                                            }}>
                                            {headerTitle}
                                        </button>
                                    </h2>

                                    <div id={`flush-${dataTargetBS}`} className="accordion-collapse collapse"
                                        aria-labelledby={`flush-${customID}`} data-bs-parent="#accordionServices">
                                        <div className="accordion-body">
                                            <div className="row g-4 align-items-center">
                                                <div className="col-lg-6">
                                                    <p className="text-capitalize fw-semibold" style={{ fontSize: "1.5rem" }}>{title}</p>

                                                    <p>{description}</p>
                                                </div>

                                                <div className="col-lg-6">
                                                    <div className="w-100 h-100 rounded-4">
                                                        <img src={image} alt="Service 1" className="w-100 h-100 rounded-4 cover" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqServices;