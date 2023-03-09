import ISetID from "utils/interfaces/ISetID.interface";

interface ICountingData extends ISetID {
    icon: string;
    counterNumber: number;
    title: string;
}

export default ICountingData;