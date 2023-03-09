import IRenderLinks from "./IRenderLinks.interface";

const RenderLinks = ({ linksArray }: IRenderLinks) => {
    return (
        <>
            {
                linksArray.map(({ id, text, url, title }) => (
                    <li key={id} className="useful-item">
                        <a className="useful-link" href={url} title={title}>{text}</a>
                    </li>
                ))
            }
        </>
    );
};

export default RenderLinks;