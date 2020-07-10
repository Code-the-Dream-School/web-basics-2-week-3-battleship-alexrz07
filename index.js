//## Step 1: Create Players

let player1 = {
    name: prompt("Type your name"),
    shipCount: 0,
    gameBoard: [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ]
};

let player2 = {
    name: prompt("Type your name"),
    shipCount: 0,
    gameBoard: [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ]


};

//Randomly Add Ships to each Board
//1. Create a loop that runs until 4 ships have been added to the board

const boardContainer = (players) => {
    for (let i = 0; players.shipCount < 4; i++) {
        //2. Inside the loop, generate a random `x` and a random `y` coordinate (must be between 0 and 3)
        let x = Math.floor(Math.random() * 4);
        let y = Math.floor(Math.random() * 4);
        if (players.gameBoard[x][y] === 1) {
            continue;
        }
        players.shipCount++;
        players.gameBoard[x][y] = 1;
        console.log(players);
    }
    return players.gameBoard;

};
boardContainer(player1);
boardContainer(player2);


//### Step 3a: Ask the Player to Choose Strike Coordinates
console.log("before battleship");
let guess_player = player1;
let check_player = player2;
const battleship = () => {
    console.log("inside battleship()")
    while (player1.shipCount != 0 && player2.shipCount != 0) {
        let guess = prompt(guess_player.name + ", what is your guess? (x,y)");
        let row = guess[0];
        let column = guess[2];
        console.log(guess);
        console.log(row);
        console.log(column);
        console.log(player2.gameBoard)
            //if (hit)
        if (check_player.gameBoard[row][column] == 1) {
            check_player.gameBoard[row][column] = 0;
            alert("HIT!");
            check_player.shipCount -= 1;
        } else {
            alert("MISS!");
        }
        let temp_player = guess_player;
        guess_player = check_player;
        check_player = temp_player;
        if (guess === "exit") {
            winner = 1;
        } //if (guess === "exit")
    } //while (player1.shipCount != 0 && player2.shipCount != 0)
    return guess_player;
}
const gameResult = battleship()
const htmlTarget = document.getElementById('result')
htmlTarget.innerHTML = gameResult.name
Collapse