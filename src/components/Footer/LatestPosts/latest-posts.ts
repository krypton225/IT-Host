import { Footer1, Footer2, Footer3 } from "data/photos";
import GenerateId from "../../../utils/generate-id";

import ILatestPosts from "./ILatestPosts.interface";

const latestPosts: Array<ILatestPosts> = [
    { postImg: Footer1, title: "Web Hosting for everyone", postDate: "Oct 21, 2019" },
    { postImg: Footer2, title: "Web Hosting for everyone", postDate: "Oct 21, 2019" },
    { postImg: Footer3, title: "Web Hosting for everyone", postDate: "Oct 21, 2019" }
];

(() => GenerateId(latestPosts))();
export default latestPosts;