/** @type {import('next-sitemap').IConfig} */

const siteUrl = 'https://www.netialap.com'


module.exports = {
    siteUrl,
    robotsTxtOptions:{
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],

    },
    generateRobotsTxt: true,
}