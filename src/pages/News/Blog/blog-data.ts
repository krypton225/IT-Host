import GenerateId from "../../../utils/generate-id";

import IBlog from "./IBlog.interface";

import { Services1, Services2, Services3 } from 'data/photos';

const blogData: Array<IBlog> = [
    {
        picture: Services1,
        date: "oct 24, 2019",
        info: {
            byWho: "admin",
            hashtags: "website, tips, seo",
            commentsNumber: 3
        },
        blogTitle: "5 tips to build your website",
        description: `Nullam lacinia ex eleifend orci porttitor, 
        suscipit interdum augue condimentum. Etiam pretium turpis eget nibh laoreet iaculis. 
        Vivamus auctor mi eget odio feugiat, quis aliquet velit ornare. 
        Integer egestas sit amet neque sed elementum. Fusce ut turpis felis. Etiam pretium pharetra augue.`,
        setMarginTop: "0"
    },
    {
        picture: Services2,
        date: "oct 24, 2019",
        info: {
            byWho: "admin",
            hashtags: "website, tips, seo",
            commentsNumber: 3
        },
        blogTitle: "5 tips to build your website",
        description: `Nullam lacinia ex eleifend orci porttitor, 
        suscipit interdum augue condimentum. Etiam pretium turpis eget nibh laoreet iaculis. 
        Vivamus auctor mi eget odio feugiat, quis aliquet velit ornare. 
        Integer egestas sit amet neque sed elementum. Fusce ut turpis felis. Etiam pretium pharetra augue.`,
        setMarginTop: "6rem"
    },
    {
        picture: Services3,
        date: "oct 24, 2019",
        info: {
            byWho: "admin",
            hashtags: "website, tips, seo",
            commentsNumber: 3
        },
        blogTitle: "5 tips to build your website",
        description: `Nullam lacinia ex eleifend orci porttitor, 
        suscipit interdum augue condimentum. Etiam pretium turpis eget nibh laoreet iaculis. 
        Vivamus auctor mi eget odio feugiat, quis aliquet velit ornare. 
        Integer egestas sit amet neque sed elementum. Fusce ut turpis felis. Etiam pretium pharetra augue.`,
        setMarginTop: "6rem"
    },
];

(() => GenerateId(blogData))();

export default blogData;