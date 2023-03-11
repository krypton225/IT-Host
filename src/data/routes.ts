import GenerateId from "../utils/generate-id";

import IRoute from "../utils/interfaces/IRoute.interface";

import { Home, About, Services, News, Contact, Login, Register, Error } from "../pages";

const allRoutesData: Array<IRoute> = [
    { pathName: "/", ComponentElement: Home },
    { pathName: "/about", ComponentElement: About },
    { pathName: "/services", ComponentElement: Services },
    { pathName: "/news", ComponentElement: News },
    { pathName: "/contact", ComponentElement: Contact },
    { pathName: "/login", ComponentElement: Login },
    { pathName: "/register", ComponentElement: Register },
    { pathName: "*", ComponentElement: Error },
];

(() => GenerateId(allRoutesData))();

export default allRoutesData;