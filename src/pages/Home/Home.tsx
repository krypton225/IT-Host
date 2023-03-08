import { Features } from "components/";

import { Landing } from "./Landing";

import EnterWebsite from "./EnterWebsite/EnterWebsite";

const Home = () => {
    return (
        <>
            <Landing />
            <Features />
            <EnterWebsite />
        </>
    );
};

export default Home;