import { useEffect } from "react";

import EnterWebsite from "components/EnterWebsite/EnterWebsite";

import { SectionHeader } from "components";

import ChooseUs from "./ChooseUs";
import Counting from "./Counting";
import Team from "./Team";

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="about-us">
            <SectionHeader sectionName="about us" baseURL="home" />

            <EnterWebsite hasBackgroundImage={false} hasDescription={false} />

            <ChooseUs />

            <Counting />

            <Team />
        </div>
    );
};

export default About;