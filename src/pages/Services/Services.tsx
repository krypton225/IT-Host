import { useEffect } from "react";

import { Features, SectionHeader } from "components";

const Services = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="services">
            <SectionHeader sectionName="services" baseURL="home" />

            <Features />
        </div>
    );
};

export default Services;