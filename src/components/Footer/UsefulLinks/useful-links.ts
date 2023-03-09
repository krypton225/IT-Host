import GenerateId from "../../../utils/generate-id";

import IUsefulLinks from "./IUsefulLinks.interface";

const firstUsefulLinks: Array<IUsefulLinks> = [
    { text: "web hosting", url: "https://www.google.com/", title: "web hosting" },
    { text: "wordpress hosting", url: "https://www.google.com/", title: "wordpress hosting" },
    { text: "VPS hosting", url: "https://www.google.com/", title: "VPS hosting" },
    { text: "cloud server", url: "https://www.google.com/", title: "cloud server" },
    { text: "reseller package", url: "https://www.google.com/", title: "reseller package" },
    { text: "dedicated hosting", url: "https://www.google.com/", title: "dedicated hosting" },
];

const secondUsefulLinks: Array<IUsefulLinks> = [
    { text: "web hosting", url: "https://www.google.com/", title: "web hosting" },
    { text: "wordpress hosting", url: "https://www.google.com/", title: "wordpress hosting" },
    { text: "VPS hosting", url: "https://www.google.com/", title: "VPS hosting" },
    { text: "cloud server", url: "https://www.google.com/", title: "cloud server" },
];

(() => {
    GenerateId(firstUsefulLinks);
    GenerateId(secondUsefulLinks);
})();

export { firstUsefulLinks, secondUsefulLinks };