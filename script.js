const pokemons = [
    { name: 'Pikachu', type: 'Electric', level: 35, img: 'images/pikachu.png' },
    { name: 'Bulbizarre', type: 'Plante/Poison', level: 15, img: 'images/bulbizarre.png' },
    { name: 'Salamèche', type: 'Feu', level: 20, img: 'images/salameche.png' },
    { name: 'Carapuce', type: 'Eau', level: 10, img: 'images/carapuce.png' },
    { name: 'Rondoudou', type: 'Normal/Fée', level: 25, img: 'images/rondoudou.png' },
    { name: 'Ectoplasma', type: 'Spectre/Poison', level: 45, img: 'images/ectoplasma.png' },
    { name: 'Évoli', type: 'Normal/Combat', level: 22, img: 'images/evoli.png' }
];

function displayPokemons(pokemons) {
    const container = document.querySelector('.pokemon-container');
    container.innerHTML = ''; // Vider le container avant d'ajouter les nouveaux éléments

    pokemons.forEach(pokemon => {
        const card = document.createElement('div');
        card.className = 'pokemon-card';

        card.innerHTML = `
            <img src="${pokemon.img}" alt="${pokemon.name}">
            <h2>${pokemon.name}</h2>
            <p>Type: ${pokemon.type}</p>
            <p>Niveau: ${pokemon.level}</p>
        `;

        container.appendChild(card);
    });
}

// Exemple d'appel à la fonction pour afficher tous les Pokémon
displayPokemons(pokemons);

// Les étudiants peuvent ensuite créer des fonctions pour filtrer, trier, et afficher les résultats de manière similaire.
