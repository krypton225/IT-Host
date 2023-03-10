import { SectionHeader } from "components";
import { useEffect } from "react";

const News = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="news">
            <SectionHeader sectionName="blog" baseURL="home" />
        </div>
    );
};

export default News;