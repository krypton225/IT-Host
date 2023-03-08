import IMainTitle from "./IMainTitle.interface";

import { SectionTitleIcon } from "data/photos";

const MainTitle = (
    { description, descriptionColor = "", title, titleColor = "" }: IMainTitle) => {
    return (
        <div className="mx-auto text-center">
            <img src={SectionTitleIcon} alt="Rocket" draggable={false} />

            <p className={`mt-2 text-uppercase fw-normal`}
                style={{ fontSize: "0.7rem", letterSpacing: "0.1rem", color: `${descriptionColor}` }}>
                {description}
            </p>

            <p className={`display-6 text-capitalize fw-bold`} style={{ color: `${titleColor}` }}>
                {title}
            </p>
        </div>
    );
};

export default MainTitle;