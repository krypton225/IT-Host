import GenerateId from "../../../utils/generate-id";

import IContactInfo from "./IContactInfo.interface";

const contactInfoData: Array<IContactInfo> = [
    { text: "Main Str, no 23, New York", url: "https://www.google.com", iconName: "icon-location-outline" },
    { text: "+546 990221 123", url: "https://www.google.com", iconName: "icon-phone" },
    { text: "test@test.com", url: "https://www.google.com", iconName: "icon-mail" },
];

(() => GenerateId(contactInfoData))();

export default contactInfoData;