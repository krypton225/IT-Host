import GenerateId from "../../utils/generate-id";

import ITag from "./ITag.interface";

const tagsData: Array<ITag> = [
    { text: "development", url: "https://www.google.com", active: false },
    { text: "SEO", url: "https://www.google.com", active: true },
    { text: "website", url: "https://www.google.com", active: false },
    { text: "hosting", url: "https://www.google.com", active: false },
    { text: "tips", url: "https://www.google.com", active: false },
    { text: "coding", url: "https://www.google.com", active: false },
    { text: "video", url: "https://www.google.com", active: false },
    { text: "marketing", url: "https://www.google.com", active: false },
    { text: "analyzing", url: "https://www.google.com", active: false },
];

(() => GenerateId(tagsData))();

export default tagsData;