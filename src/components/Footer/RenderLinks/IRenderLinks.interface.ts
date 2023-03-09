import ISetID from "utils/interfaces/ISetID.interface";

import IUsefulLinks from "../UsefulLinks/IUsefulLinks.interface";

interface IRenderLinks extends ISetID {
    linksArray: Array<IUsefulLinks>;
}

export default IRenderLinks;