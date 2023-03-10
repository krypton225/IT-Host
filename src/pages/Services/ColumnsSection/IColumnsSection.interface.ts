import ISetID from "utils/interfaces/ISetID.interface";

interface IColumnsSection extends ISetID {
    colClassName: string;
    bgColor: string;
    titleText: string;
    descriptionText: string;
}

export default IColumnsSection;