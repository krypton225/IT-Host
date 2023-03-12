import GenerateId from "../utils/generate-id";

import IRoute from "../utils/interfaces/IRoute.interface";

import { Home, About, Services, News, Contact, Error } from "../pages";

const allRoutesData: Array<IRoute> = [
    { pathName: "/", ComponentElement: Home },
    { pathName: "/about", ComponentElement: About },
    { pathName: "/services", ComponentElement: Services },
    { pathName: "/news", ComponentElement: News },
    { pathName: "/contact", ComponentElement: Contact },
    { pathName: "*", ComponentElement: Error },
];

(() => GenerateId(allRoutesData))();

export default allRoutesData;