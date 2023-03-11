import { useEffect } from "react";

import { SectionHeader } from "components";

import PostsColumn from "./PostsColumn";

import SidebarColumn from "./SidebarColumn";

const News = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="news">
            <SectionHeader sectionName="blog" baseURL="home" />

            <div style={{ paddingBlock: "9rem" }}>
                <div className="container">
                    <div className="row gy-5">
                        <PostsColumn />

                        <SidebarColumn />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;