import ISetID from "utils/interfaces/ISetID.interface";

interface ILatestPosts extends ISetID {
    postImg: string;
    title: string;
    postDate: string;
}

export default ILatestPosts;