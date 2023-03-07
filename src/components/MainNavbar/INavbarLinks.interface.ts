import ISetID from "../../utils/interfaces/ISetID.interface";

interface INavbarLinks extends ISetID {
    text: string;
    url: string;
    hasButtonShape: boolean;
}

export default INavbarLinks;