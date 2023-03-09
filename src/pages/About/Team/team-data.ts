import { TeamPerson1, TeamPerson2 } from 'data/photos';

import GenerateId from "../../../utils/generate-id";

import ITeam from "./ITeam.interface";

const teamData: Array<ITeam> = [
    {
        img: TeamPerson1,
        personName: "daniel smith",
        personJob: "",
        socialAccounts: [
            { icon: "icon-pinterest", url: "https://www.pinterest.com" },
            { icon: "icon-facebook", url: "https://www.facebook.com" },
            { icon: "icon-twitter", url: "https://www.twitter.com" }
        ],
    },
    {
        img: TeamPerson2,
        personName: "michael joe",
        personJob: "",
        socialAccounts: [
            { icon: "icon-pinterest", url: "https://www.pinterest.com" },
            { icon: "icon-facebook", url: "https://www.facebook.com" },
            { icon: "icon-twitter", url: "https://www.twitter.com" }
        ],
    },
    {
        img: TeamPerson1,
        personName: "daniel smith",
        personJob: "",
        socialAccounts: [
            { icon: "icon-pinterest", url: "https://www.pinterest.com" },
            { icon: "icon-facebook", url: "https://www.facebook.com" },
            { icon: "icon-twitter", url: "https://www.twitter.com" }
        ],
    },
    {
        img: TeamPerson2,
        personName: "michael joe",
        personJob: "",
        socialAccounts: [
            { icon: "icon-pinterest", url: "https://www.pinterest.com" },
            { icon: "icon-facebook", url: "https://www.facebook.com" },
            { icon: "icon-twitter", url: "https://www.twitter.com" }
        ],
    },
];

(() => {
    GenerateId(teamData);
})();

export default teamData;