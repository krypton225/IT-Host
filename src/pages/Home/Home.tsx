import { useEffect } from "react";

import { Features } from "components/";

import { Landing } from "./Landing";

import EnterWebsite from "../../components/EnterWebsite/EnterWebsite";
import SkillsAndTestimonials from "./SkillsAndTestimonials/SkillsAndTestimonials";
import Price from "./Price/Price";
import HostSolution from "./HostSolution/HostSolution";

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Landing />
            <Features />
            <EnterWebsite hasBackgroundImage={true} hasDescription={true} />
            <SkillsAndTestimonials />
            <Price />
            <HostSolution />
        </>
    );
};

export default Home;