import GenerateId from "../../utils/generate-id";
import INavbarLinks from "./INavbarLinks.interface";

const navbarDataItemsLinks: Array<INavbarLinks> = [
    { text: "home", url: "/", hasButtonShape: false },
    { text: "about us", url: "/", hasButtonShape: false },
    { text: "services", url: "/", hasButtonShape: false },
    { text: "news", url: "/", hasButtonShape: false },
    { text: "contact", url: "/", hasButtonShape: false },
    { text: "login/register", url: "/", hasButtonShape: true },
];

(() => GenerateId(navbarDataItemsLinks))();

export default navbarDataItemsLinks;