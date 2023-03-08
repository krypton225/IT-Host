import ISetID from "utils/interfaces/ISetID.interface";

interface IFeatureCard extends ISetID {
    iconClassName: string;
    titleCard: string;
    description: string;
}

export default IFeatureCard;