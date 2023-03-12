import GenerateId from "../../utils/generate-id";
import INavbarLinks from "./INavbarLinks.interface";

const navbarDataItemsLinks: Array<INavbarLinks> = [
    { text: "home", url: "/", hasButtonShape: false },
    { text: "about us", url: "/about", hasButtonShape: false },
    { text: "services", url: "/services", hasButtonShape: false },
    { text: "news", url: "/news", hasButtonShape: false },
    { text: "contact", url: "/contact", hasButtonShape: false },
    // { text: "login / register", url: "", hasButtonShape: true },
];

(() => GenerateId(navbarDataItemsLinks))();

export default navbarDataItemsLinks;