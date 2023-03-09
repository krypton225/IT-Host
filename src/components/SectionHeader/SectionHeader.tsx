import ISectionHeader from "./ISectionHeader.interface";

import { MainBackground } from "data/photos";

const SectionHeader = ({ sectionName, baseURL }: ISectionHeader) => {
    return (
        <div style={{
            paddingTop: "10rem",
            paddingBottom: "7rem",
            backgroundImage: `url('${MainBackground}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        }}>
            <div className="container">
                <p className="text-white fw-semibold text-capitalize" style={{ fontSize: "2.4rem" }}>
                    {sectionName}
                </p>

                <p className="fw-semibold text-capitalize" style={{color: "var(--text-gray-dark)"}}>
                    {baseURL} / {sectionName}
                </p>
            </div>
        </div>
    );
};

export default SectionHeader;