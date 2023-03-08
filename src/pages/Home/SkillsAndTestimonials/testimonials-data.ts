import GenerateId from "../../../utils/generate-id";

import ITestimonials from "./ITestimonials.interface";

import { Person } from "data/photos";

const testimonialsData: Array<ITestimonials> = [
    {
        name: "Person 1",
        personType: "client",
        personSay: `Nullam lacinia ex eleifend orci porttitor, suscipit interdum augue condimentum.
        Etiam pretium turpis eget nibh laoreet iacu-lis. Nullam lacinia ex eleifend orci porttitor.
        Suscipit interdum augue condimentum. iaculis.`,
        personImage: Person,
        isActiveCard: true
    },
    {
        name: "Person 2",
        personType: "client",
        personSay: `Nullam lacinia ex eleifend orci porttitor, suscipit interdum augue condimentum.
        Etiam pretium turpis eget nibh laoreet iacu-lis. Nullam lacinia ex eleifend orci porttitor.
        Suscipit interdum augue condimentum. iaculis.`,
        personImage: Person,
        isActiveCard: false
    },
    {
        name: "Person 3",
        personType: "client",
        personSay: `Nullam lacinia ex eleifend orci porttitor, suscipit interdum augue condimentum.
        Etiam pretium turpis eget nibh laoreet iacu-lis. Nullam lacinia ex eleifend orci porttitor.
        Suscipit interdum augue condimentum. iaculis.`,
        personImage: Person,
        isActiveCard: false
    }
];

(() => GenerateId(testimonialsData))();

export default testimonialsData;