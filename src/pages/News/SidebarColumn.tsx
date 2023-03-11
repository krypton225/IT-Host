import ThirdColumn from "components/Footer/ThirdColumn/ThirdColumn";

import { AddPhoto } from "data/photos";

import tagsData from "./tags-data";
import textLatestPostsData from "./text-posts-data";

const SidebarColumn = () => {
    return (
        <div className="col-lg-3 d-flex flex-column">
            <div className="w-100 rounded-4">
                <img src={AddPhoto} alt="" className="news-pic rounded-4 cover" />
            </div>

            <div className="w-100 mt-5 mx-auto">
                <input type="text" name="" id="" className="custom-input rounded-2" placeholder="Search.." />
            </div>

            <div className="w-100 mt-5 fw-semibold">
                <ThirdColumn titleColor="#000" marginTop="1.2rem" />
            </div>

            <div className="w-100">
                <p className="text-capitalize fw-semibold mt-5 mb-3" style={{ fontSize: "1.3rem", color: `#00` }}>
                    latest posts
                </p>

                <ul>
                    {
                        textLatestPostsData.map(({ id, text, url }) => (
                            <li key={id}>
                                <a href={url} className="d-block my-3 text-capitalize"
                                    style={{ color: `var(--text-gray-dark)` }}>
                                    {text}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className="w-100">
                <p className="text-capitalize fw-semibold mt-5 mb-3" style={{ fontSize: "1.3rem", color: `#00` }}>
                    tags
                </p>

                <ul>
                    {
                        tagsData.map(({ id, text, url, active }) => (
                            <li key={id} className="d-inline-block" style={{ marginRight: "1.3rem" }}>
                                <a href={url} className={`${active ? "fw-semibold" : ""}`}
                                    style={{ display: "inline-block", color: `${active ? "var(--pink-color)" : "var(--text-gray-dark)"}` }}>
                                    {text}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default SidebarColumn;