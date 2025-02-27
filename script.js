//object containing genre keys and game arrays as values
const games = {
    Horror: ['Silent Hill 2','Bloodbourne','Alan Wake 2', 'Until Dawn', 'Left 4 Dead 2'],
    RPG: ['Skyrim','The Witcher 3','Baldur\'s Gate 3', 'Final Fantasy VII','Fallout 4'],
    Adventure: ['The Last of Us','Assasains Creed: Oddyssey','Red Dead Redemption 2'],
    Shooter: ['DOOM','Counter Strike','Call of Duty 4','Half-life 2', 'Destiny 2'],
    Puzzle: ['It Takes Two','A Way Out','Portal', 'Portal 2']
}

//function checks if genre is a key in games then logs a random index in the array of that genre
function randomGame(genre) {
    if (games[genre]) {
        const selectedGame = games[genre][Math.floor(Math.random()*games[genre].length)]
        console.log(selectedGame) //test for console
        return selectedGame
    } else {
        return null
    }
}

//get all the elements needed
const genreSelection = document.getElementById('select')
const findGameButton = document.getElementById('findgame')
const recommendationText = document.getElementById('recommendation')
const surpriseButton = document.getElementById('surpriseMe')

//update the "recommended game goes here" text
function updateRecommendation(chosenGenre) {
    const game = randomGame(chosenGenre)
    if (game) {
        recommendationText.textContent = `${game}`;
        alert(`Happy Gaming!`)
    } else {
        recommendationText.textContent = "No game found";
    }
}

// update for find game button

findGameButton.addEventListener('click', () => {
    const selectedGenre = genreSelection.value
    updateRecommendation(selectedGenre)
    
})

//update for surprise me button
surpriseButton.addEventListener('click', () => {
    const allGenres = Object.keys(games)
    const mysteryGenre = allGenres[Math.floor(Math.random() * allGenres.length)]
    updateRecommendation(mysteryGenre)
});