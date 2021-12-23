function get_player_name() {
    var name = prompt("please enter player name :", " ")
    document.getElementById("player_name").textContent = "Hi player " + name;
    return name;
}