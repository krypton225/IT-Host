import GenerateId from "../../../utils/generate-id";

import IFaqService from "./IFaqService.interface";

import { FAQ } from "data/photos";

const faqData: Array<IFaqService> = [
    {
        customID: "one",
        borderRadius: "0.7rem",
        headerTitle: "Etiam pretium turpis eget nibh laoreet iaculis. Vivamus auctor mi eget odio feugiat.",
        dataTargetBS: "collapseOne",
        accBody: {
            title: "free support",
            description: `Nullam lacinia ex eleifend orci porttitor, suscipit interdum augue condimentum.
            Etiam pretium turpis eget nibh laoreet iaculis.
            Nullam lacinia ex eleifend orciporttitor, suscip-it interdum augue condimentum.
            Etiam pretium turpis eget eleifend orci porttitornibh laoreet iaculis.`,
            image: FAQ
        }
    },
    {
        customID: "two",
        borderRadius: "0.7rem",
        headerTitle: "Etiam pretium turpis eget nibh laoreet iaculis. Vivamus auctor mi eget odio feugiat.",
        dataTargetBS: "collapseTwo",
        accBody: {
            title: "free support",
            description: `Nullam lacinia ex eleifend orci porttitor, suscipit interdum augue condimentum.
            Etiam pretium turpis eget nibh laoreet iaculis.
            Nullam lacinia ex eleifend orciporttitor, suscip-it interdum augue condimentum.
            Etiam pretium turpis eget eleifend orci porttitornibh laoreet iaculis.`,
            image: FAQ
        }
    },
    {
        customID: "third",
        borderRadius: "0.7rem",
        headerTitle: "Etiam pretium turpis eget nibh laoreet iaculis. Vivamus auctor mi eget odio feugiat.",
        dataTargetBS: "collapseThird",
        accBody: {
            title: "free support",
            description: `Nullam lacinia ex eleifend orci porttitor, suscipit interdum augue condimentum.
            Etiam pretium turpis eget nibh laoreet iaculis.
            Nullam lacinia ex eleifend orciporttitor, suscip-it interdum augue condimentum.
            Etiam pretium turpis eget eleifend orci porttitornibh laoreet iaculis.`,
            image: FAQ
        }
    },
    {
        customID: "four",
        borderRadius: "0.7rem",
        headerTitle: "Etiam pretium turpis eget nibh laoreet iaculis. Vivamus auctor mi eget odio feugiat.",
        dataTargetBS: "collapseFour",
        accBody: {
            title: "free support",
            description: `Nullam lacinia ex eleifend orci porttitor, suscipit interdum augue condimentum.
            Etiam pretium turpis eget nibh laoreet iaculis.
            Nullam lacinia ex eleifend orciporttitor, suscip-it interdum augue condimentum.
            Etiam pretium turpis eget eleifend orci porttitornibh laoreet iaculis.`,
            image: FAQ
        }
    },
];

(() => GenerateId(faqData))();

export default faqData;