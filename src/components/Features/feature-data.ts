import GenerateId from "../../utils/generate-id";

import IFeatureCard from "./FeatureCard/IFeatureCard.interface";

const featureData: Array<IFeatureCard> = [
    {
        iconClassName: "icon-window",
        titleCard: "buy your domain",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore voluptatibus quaerat illum nemo modi?"
    },
    {
        iconClassName: "icon-server",
        titleCard: "cloud database",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore voluptatibus quaerat illum nemo modi?"
    },
    {
        iconClassName: "icon-desktop",
        titleCard: "SSD-Only",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore voluptatibus quaerat illum nemo modi?"
    },
    {
        iconClassName: "icon-contacts",
        titleCard: "smart contacts",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore voluptatibus quaerat illum nemo modi?"
    },
    {
        iconClassName: "icon-folder-open-empty",
        titleCard: "free support",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore voluptatibus quaerat illum nemo modi?"
    },
    {
        iconClassName: "icon-database",
        titleCard: "virtual marketing",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore voluptatibus quaerat illum nemo modi?"
    },
];

(() => GenerateId(featureData))();

export default featureData;