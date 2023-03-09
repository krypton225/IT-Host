import ISetID from "utils/interfaces/ISetID.interface";

interface IUsefulLinks extends ISetID {
    text: string;
    url: string;
    title: string;
}

export default IUsefulLinks;