// الألعاب المتوفرة
const games = [
    {
        id: 1,
        name: "FIFA 2024",
        image: "https://via.placeholder.com/300",
        description: "أفضل لعبة كرة قدم لمحبي الرياضة."
    },
    {
        id: 2,
        name: "Spider-Man 2",
        image: "https://via.placeholder.com/300",
        description: "مغامرات مثيرة مع سبايدرمان."
    },
    {
        id: 3,
        name: "Call of Duty",
        image: "https://via.placeholder.com/300",
        description: "معارك واقعية ومغامرات مثيرة."
    }
];

// إضافة الألعاب ديناميكيًا
const gameList = document.querySelector(".game-list");

games.forEach((game) => {
    const gameCard = document.createElement("div");
    gameCard.classList.add("game-card");
    gameCard.innerHTML = `
        <img src="${game.image}" alt="${game.name}">
        <h3>${game.name}</h3>
        <p>${game.description}</p>
    `;
    gameList.appendChild(gameCard);
}); 