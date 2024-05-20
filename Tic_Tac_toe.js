let currentPlayer = 'x';
let grid = [['', '', ''], ['', '', ''], ['', '', '']];

function cellClicked(row, col) {
    if (grid[row][col] === '') {
        grid[row][col] = currentPlayer;
        document.getElementById("GridBoard").rows[row].cells[col].innerHTML = currentPlayer;
        if (winner()) {
            displayMessage(currentPlayer + " is the Winner");
            setTimeout(() => reset(), 1500);
        } else if (draw()) {
            displayMessage("The game is a Draw");
            setTimeout(() => reset(), 1500);
        } else {
            // currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
            if (currentPlayer === 'x') {
                currentPlayer = 'o';
            } else {
                currentPlayer = 'x';
            }
            displayMessage("Next player: " + currentPlayer.toUpperCase());
        }
    }
}

function winner() {
    for (let i = 0; i <= 2; i++) {
        if (grid[i][0] !== '' && grid[i][0] === grid[i][1] && grid[i][1] === grid[i][2]) {
            return true;
        }
        if (grid[0][i] !== '' && grid[0][i] === grid[1][i] && grid[1][i] === grid[2][i]) {
            return true;
        }
    }
    if (grid[0][0] !== '' && grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2]) {
        return true;
    }
    if (grid[0][2] !== '' && grid[0][2] === grid[1][1] && grid[1][1] === grid[2][0]) {
        return true;
    }
    return false;
}

function draw() {
    for (let row of grid) {
        for (let cell of row) {
            if (cell === '') {
                return false;
            }
        }
    }
    return true;
}

function reset() {
    var cells = document.getElementsByTagName("td");
    for (let cell of cells) {
        cell.innerHTML = '';
    }
    grid = [['', '', ''], ['', '', ''], ['', '', '']];
    currentPlayer = 'x';
    displayMessage("Next player: X");
}

function displayMessage(message) {
    document.getElementById("message").innerText = message;
}

// Initial message display
displayMessage("Next player: X");
