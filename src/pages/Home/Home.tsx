import { Features } from "components/";

import { Landing } from "./Landing";

import EnterWebsite from "../../components/EnterWebsite/EnterWebsite";
import SkillsAndTestimonials from "./SkillsAndTestimonials/SkillsAndTestimonials";
import Price from "./Price/Price";
import HostSolution from "./HostSolution/HostSolution";

const Home = () => {
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