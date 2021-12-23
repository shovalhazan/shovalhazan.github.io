//make a list of memory-card elemet 


function createCard(i) {
    document.write("<div class=\"card\" data-framework=img" + i + ">");
    document.write("<img class =\"front\" src = \"cards/img" + i + ".jpg" + "\"" + "alt =\"front\"/>");
    document.write("<img class =\"back\" src = \"cards/card.png\"" + "\"alt =back\"/>");
    document.write(" </div>");
}

function createBoard(size) {
    for (let i = 0; i < (size * size) / 2; i++) {
        createCard(i);
        createCard(i);
    }
}