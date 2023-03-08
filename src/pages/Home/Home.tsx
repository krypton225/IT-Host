import { Features } from "components/";

import { Landing } from "./Landing";

import EnterWebsite from "./EnterWebsite/EnterWebsite";
import SkillsAndTestimonials from "./SkillsAndTestimonials/SkillsAndTestimonials";
import Price from "./Price/Price";

const Home = () => {
    return (
        <>
            <Landing />
            <Features />
            <EnterWebsite />
            <SkillsAndTestimonials />
            <Price />
        </>
    );
};

export default Home;