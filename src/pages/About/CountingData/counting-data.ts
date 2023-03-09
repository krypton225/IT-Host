import GenerateId from "../../../utils/generate-id";

import ICountingData from "./ICountingData.interface";

const countingData: Array<ICountingData> = [
    { icon: "icon-folder-open-empty", counterNumber: 24, title: "clients" },
    { icon: "icon-thumbs-up", counterNumber: 37, title: "followers" },
    { icon: "icon-mixcloud", counterNumber: 8, title: "cloud users" },
    { icon: "icon-adult", counterNumber: 4, title: "reviews" },
];

(() => GenerateId(countingData))();

export default countingData;