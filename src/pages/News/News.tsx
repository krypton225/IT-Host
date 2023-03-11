import { useEffect } from "react";

import { SectionHeader } from "components";

import { AddPhoto } from "data/photos";

import blogData from "./Blog/blog-data";

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
                        <div className="col-lg-9">
                            {
                                blogData.map((
                                    { id, date, blogTitle, info: { byWho, hashtags, commentsNumber }, picture, description, setMarginTop }
                                ) => (
                                    <div key={id} className="w-100" style={{ marginTop: `${setMarginTop}` }}>
                                        <div className="w-100 rounded-4">
                                            <img src={picture} alt="" className="w-100 cover rounded-4" />
                                        </div>

                                        <div className="w-100 mt-5">
                                            <span className="py-1 px-2 rounded-4 text-white"
                                                style={{ backgroundColor: "var(--pink-color)" }}>
                                                {date}
                                            </span>

                                            <p className="my-4 fs-4 fw-semibold">{blogTitle}</p>

                                            <p className="text-capitalize" style={{ color: "var(--text-gray-dark)", fontSize: "0.9rem" }}>
                                                <span className="pe-3">by {byWho}</span>
                                                <span className="set-border px-3 border-start border-end border-dark">{hashtags}</span>
                                                <span className="ps-3">{commentsNumber} comments</span>
                                            </p>

                                            <p className="mt-3">{description}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                        <div className="col-lg-3 d-flex flex-column">
                            <div className="w-100 rounded-4">
                                <img src={AddPhoto} alt="" className="news-pic rounded-4 cover" />
                            </div>

                            <div className="w-100 mt-5 mx-auto">
                                <input type="text" name="" id="" className="custom-input rounded-2" placeholder="Search.." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;