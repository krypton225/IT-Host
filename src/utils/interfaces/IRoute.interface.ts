import ISetID from "./ISetID.interface";

interface IRoute extends ISetID {
    pathName: string;
    ComponentElement: React.FC;
}

export default IRoute;