import { useEffect } from "react";

import { SectionHeader } from "components";

import { AddPhoto, Services1, Services2, Services3 } from "data/photos";

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
                            <div className="w-100">
                                <div className="w-100 rounded-4">
                                    <img src={Services1} alt="" className="w-100 cover rounded-4" />
                                </div>

                                <div className="w-100 mt-5">
                                    <span className="py-1 px-2 rounded-4 text-white" style={{ backgroundColor: "var(--pink-color)" }}>
                                        Oct 25, 2018
                                    </span>

                                    <p className="my-4 fs-4 fw-semibold">5 tips to build your website</p>

                                    <p className="text-capitalize" style={{ color: "var(--text-gray-dark)", fontSize: "0.9rem" }}>
                                        <span className="pe-3">by admin</span>
                                        <span className="set-border px-3 border-start border-end border-dark">website, tips, seo</span>
                                        <span className="ps-3">3 comments</span>
                                    </p>

                                    <p className="mt-3">
                                        Nullam lacinia ex eleifend orci porttitor, suscipit interdum augue condimentum.
                                        Etiam pretium turpis eget nibh laoreet iaculis. Vivamus auctor mi eget odio feugiat,
                                        quis aliquet velit ornare. Integer egestas sit amet neque sed elementum.
                                        Fusce ut turpis felis. Etiam pretium pharetra augue.
                                    </p>
                                </div>
                            </div>

                            <div className="w-100" style={{ marginTop: "6rem" }}>
                                <div className="w-100 rounded-4">
                                    <img src={Services2} alt="" className="w-100 cover rounded-4" />
                                </div>

                                <div className="w-100 mt-5">
                                    <span className="py-1 px-2 rounded-4 text-white" style={{ backgroundColor: "var(--pink-color)" }}>
                                        Oct 25, 2018
                                    </span>

                                    <p className="my-4 fs-4 fw-semibold">5 tips to build your website</p>

                                    <p className="text-capitalize" style={{ color: "var(--text-gray-dark)", fontSize: "0.9rem" }}>
                                        <span className="pe-3">by admin</span>
                                        <span className="set-border px-3 border-start border-end border-dark">website, tips, seo</span>
                                        <span className="ps-3">3 comments</span>
                                    </p>

                                    <p className="mt-3">
                                        Nullam lacinia ex eleifend orci porttitor, suscipit interdum augue condimentum.
                                        Etiam pretium turpis eget nibh laoreet iaculis. Vivamus auctor mi eget odio feugiat,
                                        quis aliquet velit ornare. Integer egestas sit amet neque sed elementum.
                                        Fusce ut turpis felis. Etiam pretium pharetra augue.
                                    </p>
                                </div>
                            </div>

                            <div className="w-100" style={{ marginTop: "6rem" }}>
                                <div className="w-100 rounded-4">
                                    <img src={Services3} alt="" className="w-100 cover rounded-4" />
                                </div>

                                <div className="w-100 mt-5">
                                    <span className="py-1 px-2 rounded-4 text-white" style={{ backgroundColor: "var(--pink-color)" }}>
                                        Oct 25, 2018
                                    </span>

                                    <p className="my-4 fs-4 fw-semibold">5 tips to build your website</p>

                                    <p className="text-capitalize" style={{ color: "var(--text-gray-dark)", fontSize: "0.9rem" }}>
                                        <span className="pe-3">by admin</span>
                                        <span className="set-border px-3 border-start border-end border-dark">website, tips, seo</span>
                                        <span className="ps-3">3 comments</span>
                                    </p>

                                    <p className="mt-3">
                                        Nullam lacinia ex eleifend orci porttitor, suscipit interdum augue condimentum.
                                        Etiam pretium turpis eget nibh laoreet iaculis. Vivamus auctor mi eget odio feugiat,
                                        quis aliquet velit ornare. Integer egestas sit amet neque sed elementum.
                                        Fusce ut turpis felis. Etiam pretium pharetra augue.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <div className="w-100 rounded-4">
                                <img src={AddPhoto} alt="" className="w-100 rounded-4 cover" />
                            </div>

                            <div className="w-100 mt-5">
                                <input type="text" name="" id="" className="w-100" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;