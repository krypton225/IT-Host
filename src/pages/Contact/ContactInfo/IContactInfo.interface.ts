import ISetID from "utils/interfaces/ISetID.interface";

interface IContactInfo extends ISetID {
    url: string;
    iconName: string;
    text: string;
}

export default IContactInfo;