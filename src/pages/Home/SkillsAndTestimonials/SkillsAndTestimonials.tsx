import skillsDataItems from "./skills-data";

import testimonialsData from "./testimonials-data";

const SkillsAndTestimonials = () => {
    return (
        <section>
            <div className="container">
                <div className="row g-5">
                    <div className="col-md-6">
                        <div className="skills">
                            {
                                skillsDataItems.map(({ id, skillName, percent, bgColor }) => (
                                    <div key={id} >
                                        <p className="text-capitalize fw-semibold">{skillName}</p>

                                        <div className="skill-line-container" data-percent={`${percent}`}>
                                            <div className={`skill-line-child`} style={{ width: `${percent}%`, backgroundColor: `${bgColor}` }}></div>

                                            <span className="skill-number fw-semibold" style={{ left: `calc(${percent}% - 4%)` }}>
                                                {percent}%
                                            </span>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="testimonials">
                            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    {
                                        testimonialsData.map(({ id, name, personSay, personImage, personType, isActiveCard }) =>
                                        (
                                            <div key={id} className={`carousel-item ${isActiveCard ? "active" : ""}`}>
                                                <p className="testimonials__say">{personSay}</p>

                                                <div className="w-100 mt-5 d-flex justify-content-end align-items-center">
                                                    <div className="fw-semibold me-5 text-capitalize">
                                                        <p className="m-0">{name}</p>
                                                        <p className="m-0" style={{ color: `var(--pink-color)` }}>{personType}</p>
                                                    </div>

                                                    <div style={{ width: `5.7rem`, height: `5.7rem`, borderRadius: `50%` }}>
                                                        <img src={personImage} alt="Person"
                                                            className="w-100 h-100 rounded-circle object-fit-cover" />
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsAndTestimonials;