var cells = '.crosses__cell',
    checked = 'crosses__check',
    cross = 'X',
    zero = 'O',
    firstPlayer = true, // player one = true, player two = false
    firstCells = new Array(9), // cells for player one
    secondCells = new Array(9), // cells for player two
    step = 0;
    endGame = false;

var allCells = document.querySelectorAll(cells);
for (i = 0; i < allCells.length; i++) {
    allCells[i].addEventListener('click', toCheck);
};

function toCheck() {
    var currentArr = firstPlayer ? firstCells : secondCells;
    var currentPlayer = firstPlayer ? 'one' : 'two';
    var cell = this.children[0];
    if (endGame) {
        alert('Please start new game.');
        return
    };

    if (cell.innerHTML == 0) {
        cell.innerHTML = firstPlayer ? cross : zero;
        cell.classList.add(checked);
        currentArr[this.dataset.cell] = true;
        checkWin(currentArr, currentPlayer);
        if (++step == 9 && !endGame) {
            alert("It's draw...")
            endGame = true;
        };
        firstPlayer = !firstPlayer;
    } else {
        alert('This cell already marked.\nPlease, take another choice.')
    }
}

function checkWin(arr, player) {
    if (arr[0] && arr[1] && arr[2] ||
        arr[3] && arr[4] && arr[5] ||
        arr[6] && arr[7] && arr[8] ||
        arr[0] && arr[3] && arr[6] ||
        arr[1] && arr[4] && arr[7] ||
        arr[2] && arr[5] && arr[8] ||
        arr[0] && arr[4] && arr[8] ||
        arr[2] && arr[4] && arr[6]) {
            alert(`Player ${player} wins!`);
            endGame = true;
        }
}