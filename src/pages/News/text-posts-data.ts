import GenerateId from "../../utils/generate-id";

import ITextLatestPostsData from "./ITextLatestPostsData.interface";

const textLatestPostsData: Array<ITextLatestPostsData> = [
    { text: "development", url: "https://www.google.com" },
    { text: "SEO", url: "https://www.google.com" },
    { text: "tips & trikes", url: "https://www.google.com" },
    { text: "hosting", url: "https://www.google.com" },
];

(() => GenerateId(textLatestPostsData))();

export default textLatestPostsData;