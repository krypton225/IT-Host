import RenderLinks from "../RenderLinks/RenderLinks";

import { firstUsefulLinks, secondUsefulLinks } from "../UsefulLinks/useful-links";

const SecondColumn = () => {
    return (
        <div className="col-md-6 col-lg-4">
            <p className="mt-3 text-capitalize text-white" style={{ fontSize: "1.3rem" }}>useful links</p>

            <div className="row mt-4 gx-4 gy-xs-4 gy-lg-0 text-capitalize">
                <div className="col-sm-6">
                    <ul>
                        {<RenderLinks linksArray={firstUsefulLinks} />}
                    </ul>
                </div>

                <div className="col-sm-6">
                    <ul>
                        {<RenderLinks linksArray={secondUsefulLinks} />}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SecondColumn;