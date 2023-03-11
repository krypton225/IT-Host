import ISetID from "utils/interfaces/ISetID.interface";

interface ITextLatestPostsData extends ISetID {
    text: string;
    url: string;
}

export default ITextLatestPostsData;