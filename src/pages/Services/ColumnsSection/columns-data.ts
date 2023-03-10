import GenerateId from "../../../utils/generate-id";

import IColumnsSection from "./IColumnsSection.interface";

const columnsData: Array<IColumnsSection> = [
    {
        colClassName: "first-col",
        bgColor: "#0E0532",
        descriptionText: `Nullam lacinia ex eleifend orci porttitor, suscipit interdum augue condimentum.
        Etiam pretium turpis eget nibh laoreet iaculis.
        Vivamus auctor mi eget odio feugiat, quis aliquet velit ornare.
        Integer egestas sit amet neque sed elementum. Fusce ut turpis felis.
        Etiam pretium pharetra augue, ac porttitor dolor consequat eget.
        Cras tempor suscipit enim vehicula ultrices. Mauris sed orci blandit, rhoncus massa non, tincidunt odio.`,
        titleText: "our mission"
    },
    {
        colClassName: "second-col",
        bgColor: "#2D1678",
        descriptionText: `Nullam lacinia ex eleifend orci porttitor, suscipit interdum augue condimentum.
        Etiam pretium turpis eget nibh laoreet iaculis.
        Vivamus auctor mi eget odio feugiat, quis aliquet velit ornare.
        Integer egestas sit amet neque sed elementum. Fusce ut turpis felis.
        Etiam pretium pharetra augue, ac porttitor dolor consequat eget.
        Cras tempor suscipit enim vehicula ultrices. Mauris sed orci blandit, rhoncus massa non, tincidunt odio.`,
        titleText: "our vision"
    }
];

(() => GenerateId(columnsData))();

export default columnsData;