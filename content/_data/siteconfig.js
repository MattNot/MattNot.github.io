require("dotenv").config();

module.exports = {
    // Website title, shown in left sidebar and in page title
    title: "Matteo Notaro",
    // Site URL to generate absolute URLs. Used across the board.
    url: process.env.URL || "http://localhost:8080",
    // Profile image for left sidebar
    image: "/assets/images/sidebar_profile.jpg",
    // Image alt text for left sidebar
    imageAlt: "Matteo Notaro",
    // Author name, shown in left sidebar, and used in JSON-LD
    author: "Matteo Notaro",
    // Site description, shown below site image (optional)
    description: "I believe in the value of community for developers",
    // OpenGraph default image, in case you don't have an `image`
    // set in your Markdown frontmatter; relevant for social
    // sharing.
    openGraphDefaultImage: "/assets/images/sidebar_profile.jpg",
    // GitHub ID (optional, remove it not needed), used for link in the left sidebar
    socialGitHub: "MattNot",
    // LinkedIn ID  (optional, remove it not needed), used for link in the left sidebar
    socialLinkedIn: "matteo-notaro",

    googleAnalytics: "G-9X18SGCT31"
};
