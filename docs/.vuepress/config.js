const { path } = require("@vuepress/utils");

module.exports = {
    lang: "en-US",
    title: "SmokeyStack",
    description: "This is my website",
    theme: path.resolve(__dirname, "./theme/local-theme/index.js"),
    themeConfig: {
        contributors: false,
        darkMode: false,
        lastUpdated: false,
        sidebar: {
            "/": [
                {
                    text: "About",
                    collapsible: true,
                    children: ["/about/about_me.md", "/about/links.md"],
                },
                {
                    text: "Downloads",
                    collapsible: true,
                    children: ["/downloads/add_on.md", "/downloads/program.md"],
                },
                {
                    text: "Blog",
                    link: "/blog/index.md",
                },
            ],
        },
    },
};
