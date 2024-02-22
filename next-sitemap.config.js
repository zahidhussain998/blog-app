const siteUrl = 'https://www.netialap.com';

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  dynamicRoutes: async () => {
    const posts = await fetchPosts(); // Replace with your logic to fetch post data

    return posts.map((post) => ({
      url: `/post/${post.slug}`,
      changefreq: 'daily',
      priority: 0.7,
    }));
  },
};
