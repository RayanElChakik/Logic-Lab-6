var trials = prompt("Please enter the number of trials in game")
var strLength = prompt("Please enter the number of length allowed in game")

function playGame() {
    function isUpper(str) {
        return  ( !/[a-z]/.test(str) && /[A-Z]/.test(str) && /[]*/.test(str) && !/\W/.test(str));
    }
    isUpper(input)
    var input = (prompt("Enter Array", ""));
    var array = [...input]
    if (array.length == strLength && isUpper(input)) {
        alert("Yes");
        if (--trials > 0)
        playGame()
    } else {
        alert("No");
        // to limit user for limited count
        if (--trials > 0)
        playGame()
    }
    }
    playGame();