import ISetID from "utils/interfaces/ISetID.interface";

interface IFaqService extends ISetID {
    customID: string;
    borderRadius: string;
    dataTargetBS: string;
    headerTitle: string;

    accBody: {
        title: string;
        description: string;
        image: string;
    };
}

export default IFaqService;