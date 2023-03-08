import { Features } from "components/";

import { Landing } from "./Landing";

import EnterWebsite from "./EnterWebsite/EnterWebsite";

import SkillsAndTestimonials from "./SkillsAndTestimonials/SkillsAndTestimonials";

const Home = () => {
    return (
        <>
            <Landing />
            <Features />
            <EnterWebsite />
            <SkillsAndTestimonials />
        </>
    );
};

export default Home;