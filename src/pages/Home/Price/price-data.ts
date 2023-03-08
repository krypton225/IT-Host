import GenerateId from "../../../utils/generate-id";

import IPriceCard from "./PriceCard/IPriceCard.interface";

const priceData: Array<IPriceCard> = [
    {
        titleText: "basic plan",
        price: { number: 9, duration: "month" },
        dataItemsList: [
            "1GB storage",
            "3GB bandwidth",
            "free email addresses",
            "24/7 security monitoring",
            "24/7 technical support"
        ],
        isActive: false,
        bgColor: "--bg-amaranth-mov-color"
    },
    {
        titleText: "start plan",
        price: { number: 7, duration: "month" },
        dataItemsList: [
            "1GB storage",
            "3GB bandwidth",
            "free email addresses",
            "24/7 security monitoring",
            "24/7 technical support"
        ],
        isActive: true,
        bgColor: "--pink-color"
    },
    {
        titleText: "vip plan",
        price: { number: 19, duration: "month" },
        dataItemsList: [
            "1GB storage",
            "3GB bandwidth",
            "free email addresses",
            "24/7 security monitoring",
            "24/7 technical support"
        ],
        isActive: false,
        bgColor: "--bg-amaranth-mov-color"
    },
];

(() => GenerateId(priceData))();

export default priceData;