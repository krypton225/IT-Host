import GenerateId from "../../../utils/generate-id";

import ISocialFooter from "./ISocialFooter.interface";

const socialData: Array<ISocialFooter> = [
    {
        title: "pinterest",
        linkIcon: "icon-pinterest",
        url: "https://www.pinterest.com"
    },
    {
        title: "facebook",
        linkIcon: "icon-facebook",
        url: "https://www.facebook.com"
    },
    {
        title: "twitter",
        linkIcon: "icon-twitter",
        url: "https://www.twitter.com"
    },
    {
        title: "dribbble",
        linkIcon: "icon-dribbble",
        url: "https://www.dribbble.com"
    },
    {
        title: "behance",
        linkIcon: "icon-behance",
        url: "https://www.behance.com"
    },
];

(() => GenerateId(socialData))();

export default socialData;