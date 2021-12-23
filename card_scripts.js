const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    //toogle= if the class is here-romoveIt, if not-addIt
    // console.log(this);
    // this.classList.toggle('flip');
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;

        return;
    }

    secondCard = this;
    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    firstCard.classList.add('big')
    addScore();
    checkForWin();
    resetBoard();
}

function addScore() {
    document.getElementById("current_score").textContent = parseInt(document.getElementById("current_score").textContent) + 1;
}

function addWin() {
    document.getElementById("total_wins").textContent = parseInt(document.getElementById("total_wins").textContent) + 1;
}

function addScoreToTotal() {
    console.log("winnnn");
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

function checkForWin() {
    win = true;
    cards.forEach(element => {
        win = win && element.classList.contains('flip')
    });
    if (win) {
        var x = parseInt(document.getElementById("current_score").textContent)
        updateLocalStorage(x);
        addWin();
    }
}

function updateLocalStorage(score) {
    var obj = JSON.parse(localStorage.getItem('game_data'));
    console.log(obj)
    obj.total_score = obj.total_score + score;
    obj.total_wins = obj.total_wins + 1;
    localStorage.setItem('game_data', JSON.stringify(obj));
    var obj2 = JSON.parse(localStorage.getItem('game_data'));
    console.log(obj2)
}

function startNewGame() {
    cards.forEach(element => {
        element.classList.remove('flip')
    });
    shuffle();
    resetBoard();
    document.getElementById("current_score").textContent = 0;
    cards.forEach(card => card.addEventListener('click', flipCard));
}

function shuffle() {
    size = cards.length
    console.log(size)
    cards.forEach(card => {
        let random = Math.floor(Math.random() * size);
        card.style.order = random;
    });
}

(function shuffle() {
    size = cards.length
    console.log(size)
    cards.forEach(card => {
        let random = Math.floor(Math.random() * size);
        card.style.order = random;
    });
})();

cards.forEach(card => card.addEventListener('click', flipCard));