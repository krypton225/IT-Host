import ISetID from "utils/interfaces/ISetID.interface";

interface ITeam extends ISetID {
    img: string;
    personName: string;
    personJob: string;
    socialAccounts: Array<{
        icon: string;
        url: string;
    }>;
}

export default ITeam;