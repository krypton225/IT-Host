import { useEffect } from "react";

import { Features, SectionHeader } from "components";

import Columns from "./ColumnsSection/Columns";

const Services = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="services">
            <SectionHeader sectionName="services" baseURL="home" />

            <Features />

            <Columns />
        </div >
    );
};

export default Services;