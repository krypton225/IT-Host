import { MainButton } from "components";

import columnsData from "./columns-data";

import { GeneralService } from "data/photos";

const Columns = () => {
    return (
        <div className="vw-100 min-vh-100 custom-grid" style={{ backgroundColor: "red" }}>
            {
                columnsData.map(({ id, colClassName, bgColor, titleText, descriptionText }) => (
                    <div key={id} className={`vh-100 ${colClassName}`} style={{ backgroundColor: `${bgColor}` }}>
                        <p className="text-capitalize text-white" style={{ fontSize: "1.7rem" }}>{titleText}</p>

                        <p className="text-white">{descriptionText}</p>

                        <MainButton text="read more" bg="var(--pink-color)" color="white" rounded={true} halfWidth padding="0.7rem" />
                    </div>
                ))
            }

            <div className="vh-100 third-col" style={{ backgroundColor: "#432A8F" }}>
                <div style={{ width: "17rem", height: "17rem", marginInline: "auto", textAlign: "center" }}>
                    <img src={GeneralService} alt="Service Web" className="w-100 h-100 cover" />
                </div>
            </div>
        </div>
    );
};

export default Columns;