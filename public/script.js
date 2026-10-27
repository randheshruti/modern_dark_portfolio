
const articles = [
    {
        title: "Introduction to Python",
        description: "Learn Python programming from the basics.",
        author: "Shruti"
    },
    {
        title: "Web Development",
        description: "Discover HTML, CSS and JavaScript.",
        author: "Shruti"
    },
    {
        title: "Data Analytics",
        description: "Explore data and find useful insights.",
        author: "Shruti"
    }
];

const container = document.getElementById("articles-container");

articles.forEach(function(article) {
    const card = document.createElement("div");

    card.className = "article-card";

    card.innerHTML = `
        <h2>${article.title}</h2>
        <p>${article.description}</p>
        <small>By ${article.author}</small>
    `;

    container.appendChild(card);
});
