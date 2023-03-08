import skillsDataItems from "./skills-data";

const SkillsAndTestimonials = () => {
    return (
        <section>
            <div className="container">
                <div className="row">
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

                    <div className="col-md-6"></div>
                </div>
            </div>
        </section>
    );
};

export default SkillsAndTestimonials;