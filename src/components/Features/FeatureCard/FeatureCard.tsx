import IFeatureCard from "./IFeatureCard.interface";

const FeatureCard = ({ iconClassName, titleCard, description }: IFeatureCard) => {
    return (
        <div className="col-md-6 col-lg-4">
            <div className="feature-card mt-5 text-center">
                <div className="feature-card__icon fs-1 position-relative">
                    <i className={`icon ${iconClassName} p-3 rounded-circle custom-bg-pink text-white fw-lighter`}></i>
                </div>

                <p className="my-4 text-capitalize fs-5 fw-semibold">{titleCard}</p>

                <p style={{ fontSize: "0.9rem" }}>{description}</p>
            </div>
        </div>
    );
};

export default FeatureCard;