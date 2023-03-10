import { useEffect } from "react";

import { Features, SectionHeader } from "components";

import Columns from "./ColumnsSection/Columns";

import FaqServices from "./FaqServices/FaqServices";

const Services = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="services">
            <SectionHeader sectionName="services" baseURL="home" />

            <Features />

            <Columns />

            <FaqServices />
        </div >
    );
};

export default Services;