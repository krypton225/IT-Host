import { MainTitle } from "components/";
import featureData from "./feature-data";
import FeatureCard from "./FeatureCard/FeatureCard";

const Features = () => {
    return (
        <section>
            <MainTitle description="here is all our features" title="see our features" />

            <div className="container mt-5">
                <div className="row">
                    {
                        featureData.map(({ id, iconClassName, titleCard, description }) => (
                            <FeatureCard key={id} iconClassName={iconClassName} titleCard={titleCard} description={description} />
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Features;