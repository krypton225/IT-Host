import ISetID from "utils/interfaces/ISetID.interface";

interface IBlog extends ISetID {
    picture: string;
    date: string;
    blogTitle: string;
    info: {
        byWho: string;
        hashtags: string;
        commentsNumber: number;
    };
    description: string;
    setMarginTop?: string;
}

export default IBlog;