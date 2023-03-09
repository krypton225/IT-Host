import { SectionHeader } from "components";
import EnterWebsite from "components/EnterWebsite/EnterWebsite";

const About = () => {
    return (
        <div>
            <SectionHeader sectionName="about us" baseURL="home" />

            <EnterWebsite hasBackgroundImage={false} />
        </div>
    );
};

export default About;