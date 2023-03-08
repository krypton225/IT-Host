import GenerateId from "../../../utils/generate-id";

import ISkills from "./ISkills.interface";

const skillsDataItems: Array<ISkills> = [
    { skillName: "illustrator", percent: 80, bgColor: "var(--pink-color)" },
    { skillName: "photoshop", percent: 90, bgColor: "var(--pink-color-2)" },
    { skillName: "SEO", percent: 80, bgColor: "#d22beb" },
    { skillName: "E-commerce", percent: 60, bgColor: "#972beb" },
    { skillName: "HTML", percent: 70, bgColor: "#732beb" },
];

(() => GenerateId(skillsDataItems))();

export default skillsDataItems;