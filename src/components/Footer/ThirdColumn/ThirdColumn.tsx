import latestPosts from "../LatestPosts/latest-posts";

const ThirdColumn = () => {
    return (
        <div className="col-md-6 col-lg-4">
            <p className="mt-3 text-capitalize text-white" style={{ fontSize: "1.3rem" }}>latest posts</p>

            {
                latestPosts.map(({ id, title, postImg, postDate }) => (
                    <div className="row g-0 mt-2" key={id}>
                        <div className="col-3">
                            <div style={{ width: "3.5rem", height: "3.5rem", borderRadius: "1.2rem" }}>
                                <img src={postImg} alt="Footer 1" className="w-100 h-100 cover"
                                    style={{ borderRadius: "1.2rem" }} />
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="d-flex flex-column" style={{ fontSize: "0.8rem" }}>
                                <p className="mb-2" style={{ color: "var(--text-gray-dark)" }}>{title}</p>
                                <p className="mt-0" style={{ color: "var(--pink-color)" }}>{postDate}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default ThirdColumn;