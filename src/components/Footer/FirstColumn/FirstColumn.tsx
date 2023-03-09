import { Logo } from "data/photos";

import socialData from "../SocialFooter/social-data";

const FirstColumn = () => {
    return (
        <div className="col-md-12 col-lg-4">
            <img src={Logo} alt="IT Host" className="mt-2" />

            <p className="mt-3 lh-lg" style={{ fontSize: "0.8rem", color: "var(--text-gray-light)" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Porro repellat consectetur earum. Provident rerum voluptates cupiditate quisquam officiis error.
                Veniam tempore dolor minus, debitis alias quidem sit unde magni dignissimos!
            </p>

            {
                socialData.map(({ id, title, url, linkIcon }) => (
                    <a href={url} key={id} title={title} className="social-link">
                        <i className={`icon ${linkIcon}`}></i>
                    </a>
                ))
            }
        </div>
    );
};

export default FirstColumn;