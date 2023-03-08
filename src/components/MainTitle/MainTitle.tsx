import IMainTitle from "./IMainTitle.interface";

import { SectionTitleIcon } from "data/photos";

const MainTitle = ({ description, title }: IMainTitle) => {
    return (
        <div className="mx-auto text-center">
            <img src={SectionTitleIcon} alt="Rocket" draggable={false} />

            <p className="mt-2 text-uppercase fw-normal"
                style={{ fontSize: "0.7rem", letterSpacing: "0.1rem" }}>
                {description}
            </p>

            <p className="display-6 text-capitalize fw-bold">
                {title}
            </p>
        </div>
    );
};

export default MainTitle;