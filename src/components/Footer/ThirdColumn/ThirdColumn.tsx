import latestPosts from "../LatestPosts/latest-posts";
import IThirdColumn from "./IThirdColumn.interface";

const ThirdColumn = ({ titleColor = "white" }: IThirdColumn) => {
    return (
        <>
            <p className="mt-3 text-capitalize" style={{ fontSize: "1.3rem", color: `${titleColor}` }}>latest posts</p>

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
        </>
    );
};

export default ThirdColumn;