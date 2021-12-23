class Player {
    constructor(name) {
        this.name = name;
        this.total_score = 0
        this.total_wins = 0
    }

}

function writeNewPlayer(playerName) {
    newplayer = new Player(playerName);
    localStorage.setItem('game_data', JSON.stringify(newplayer));
    readLocalStorage()
}

function readLocalStorage() {
    var obj = JSON.parse(localStorage.getItem('game_data'));
    console.log(obj)
}


function finished(err) {
    console.log('success-write json');
}