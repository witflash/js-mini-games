var cells = '.crosses__cell',
    checked = 'crosses__check',
    cross = 'X',
    zero = 'O',
    playerOne = true,
    endGame = false;

var allCells = document.querySelectorAll(cells);
for (i = 0; i < allCells.length; i++) {
    allCells[i].addEventListener('click', toCheck);
};

function toCheck() {
    var cell = this.children[0];
    if (cell.innerHTML == 0) {
        cell.innerHTML = playerOne ? cross : zero;
        cell.classList.add(checked);
        playerOne = !playerOne;
    } else {
        alert('This cell already marked.\nPlease, take another choice.')
    }
}