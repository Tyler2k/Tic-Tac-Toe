$(document).ready(function() {
    var turns = 0;
    $(".square").hover(function() {
        $(this).css("background", "#85e085");
    }, function() {
        $(this).css("background", " #ffcc99")
    });
    $(".square").on("click", function() {
        //$(this).html(currentPlayer);
        var move = $(this).attr("id");
        if (board[move - 1] == "X" || board[move - 1] == "O") {
            $("#status").html("That square is occupied!");
        } else {
            board[move - 1] = currentPlayer;
            turns++
            $(this).html(currentPlayer);
            if (checkForWin(board)) {
                $("#status").html("Player " + currentPlayer + " Wins!");
            } else {
                switchPlayer();
                $("#status").html("Your turn player " + currentPlayer + "!");
            }
        }
        if (turns > 8) {
             $("#status").html("You both lose...");   
        }

    });

    $("#button").on("click", function() {
        clearBoard();
        turns = 0;
    });
});

var board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var currentPlayer = "X";

function clearBoard() {
    board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    currentPlayer = "X";
    $(".square").html("");
    $("#status").html("Your turn player X");
}

function switchPlayer() {
    if (currentPlayer == "X") {
        currentPlayer = "O"
    } else {
        currentPlayer = "X";
    }
}

function checkForWin(board) {
    // check for row wins
    for (var i = 0; i < 7; i += 3) {
        if (board[i] === currentPlayer && board[i + 1] === currentPlayer && board[i + 2] === currentPlayer) {
            return true;
        }
    }
    //check for column wins
    for (var i = 0; i < 3; i++) {
        if (board[i] === currentPlayer && board[i + 3] === currentPlayer && board[i + 6] === currentPlayer) {
            return true;
        }
    }
    //check for diagonal wins
    if (board[0] === currentPlayer && board[4] === currentPlayer && board[8] === currentPlayer) {
        return true;
    } else if (board[2] === currentPlayer && board[4] === currentPlayer && board[6] === currentPlayer) {
        return true;
    }
    return false;
}