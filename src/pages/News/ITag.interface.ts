import ISetID from "utils/interfaces/ISetID.interface";

interface ITag extends ISetID {
    text: string;
    url: string;
    active: boolean;
}

export default ITag;