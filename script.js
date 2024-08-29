const typeColors = {
    'Électrique': '#FFD700',
    'Plante': '#78C850',
    'Poison': '#A040A0',
    'Feu': '#F08030',
    'Eau': '#6890F0',
    'Normal': '#A8A878',
    'Fée': '#EE99AC',
    'Spectre': '#705898',
    'Combat': '#C03028',
    'Vol': '#A890F0',
    'Glace': '#98D8D8',
    'Roche': '#B8A038',
    'Sol': '#E0C068',
    'Psy': '#F85888'
};

const pokemons = [
    { name: 'Pikachu', type: 'Électrique', level: 35, img: 'images/pikachu.png' },
    { name: 'Bulbizarre', type: 'Plante,Poison', level: 15, img: 'images/bulbizarre.png' },
    { name: 'Salamèche', type: 'Feu', level: 20, img: 'images/salameche.png' },
    { name: 'Carapuce', type: 'Eau', level: 10, img: 'images/carapuce.png' },
    { name: 'Rondoudou', type: 'Normal,Fée', level: 25, img: 'images/rondoudou.png' },
    { name: 'Ectoplasma', type: 'Spectre,Poison', level: 45, img: 'images/ectoplasma.png' },
    { name: 'Évoli', type: 'Normal,Combat', level: 22, img: 'images/evoli.png' },
    { name: 'Dracaufeu', type: 'Feu,Vol', level: 50, img: 'images/dracaufeu.png' },
    { name: 'Florizarre', type: 'Plante,Poison', level: 55, img: 'images/florizarre.png' },
    { name: 'Tortank', type: 'Eau', level: 52, img: 'images/tortank.png' },
    { name: 'Mélofée', type: 'Fée', level: 18, img: 'images/melofee.png' },
    { name: 'Raichu', type: 'Électrique', level: 40, img: 'images/raichu.png' },
    { name: 'Magicarpe', type: 'Eau', level: 5, img: 'images/magicarpe.png' },
    { name: 'Lokhlass', type: 'Eau,Glace', level: 35, img: 'images/lokhlass.png' },
    { name: 'Onix', type: 'Roche,Sol', level: 30, img: 'images/onix.png' },
    { name: 'Ronflex', type: 'Normal', level: 45, img: 'images/ronflex.png' },
    { name: 'Mewtwo', type: 'Psy', level: 70, img: 'images/mewtwo.png' }
];

function displayPokemons(pokemons) {
    const container = document.querySelector('.pokemon-container');
    container.innerHTML = '';

    pokemons.forEach(pokemon => {
        const card = document.createElement('div');
        card.className = 'pokemon-card';

        const types = pokemon.type.split(',');
        let bgColor;
        if (types.length === 2) {
            const color1 = typeColors[types[0].trim()] || '#ccc';
            const color2 = typeColors[types[1].trim()] || '#ccc';
            bgColor = `linear-gradient(to right, ${color1} 50%, ${color2} 50%)`;
        } else {
            const color = typeColors[types[0].trim()] || '#ccc';
            bgColor = color;
        }

        card.style.background = bgColor;

        card.innerHTML = `
            <img src="${pokemon.img}" alt="${pokemon.name}">
            <h2>${pokemon.name}</h2>
            <p>Type: ${types.join(' / ')}</p>
            <p>Niveau: ${pokemon.level}</p>
        `;

        container.appendChild(card);
    });
}

function filterAndSortPokemons() {
    const searchQuery = document.getElementById('search-bar').value.toLowerCase();
    const selectedType = document.getElementById('type-filter').value;
    const sortOrder = document.getElementById('sort-order').value;

    let filteredPokemons = pokemons.filter(pokemon => {
        const matchesName = pokemon.name.toLowerCase().includes(searchQuery);
        const matchesType = selectedType === "" || pokemon.type.includes(selectedType);
        return matchesName && matchesType;
    });

    // Trier les Pokémon
    filteredPokemons.sort((a, b) => {
        if (sortOrder === 'name-asc') {
            return a.name.localeCompare(b.name);
        } else if (sortOrder === 'name-desc') {
            return b.name.localeCompare(a.name);
        } else if (sortOrder === 'level-asc') {
            return a.level - b.level;
        } else if (sortOrder === 'level-desc') {
            return b.level - a.level;
        }
    });

    displayPokemons(filteredPokemons);
}

document.getElementById('search-bar').addEventListener('input', filterAndSortPokemons);
document.getElementById('type-filter').addEventListener('change', filterAndSortPokemons);
document.getElementById('sort-order').addEventListener('change', filterAndSortPokemons);

displayPokemons(pokemons);
