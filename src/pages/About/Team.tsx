import { MainTitle } from "components";

import teamData from "./Team/team-data";

const Team = () => {
    return (
        <div className="container" style={{ paddingBlock: "5rem" }}>
            <MainTitle title="meet the team" description="the best team is here" />

            <div className="row g-5" style={{ marginTop: "2.3rem" }}>
                {
                    teamData.map(({ id, img, personName, personJob, socialAccounts }) => (
                        <div key={id} className="col-md-6 col-lg-3">
                            <div className="w-100 rounded-5">
                                <img src={img} alt="A person in team"
                                    className="w-100 rounded-5 cover" draggable={false} />
                            </div>

                            <div className="mt-4 text-center">
                                <div className="text-capitalize">
                                    <p className="mb-0 fw-semibold" style={{ fontSize: "1.4rem" }}>{personName}</p>
                                    <p className="mt-0" style={{ fontSize: "1rem" }}>{personJob}</p>
                                </div>

                                <ul className="w-100 mt-4 d-flex justify-content-center mx-auto text-center">
                                    {
                                        socialAccounts.map(({ icon, url }) => (
                                            <li key={icon} className="d-inline-block me-3">
                                                <a href={url} className="team-link">
                                                    <i className={`icon ${icon}`}></i>
                                                </a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Team;