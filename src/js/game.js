var cell = '.crosses__cell',
    checked = 'crosses__check',
    cross = 'X',
    zero = 'O',
    playerOne = true,
    endGame = false;

var allCell = document.querySelectorAll(cell);
for (i = 0; i < allCell.length; i++) {
    allCell[i].addEventListener('click', toCheck);
};

function toCheck() {
    this.children[0].innerHTML = playerOne ? cross : zero;
    this.children[0].classList.add(checked);
    playerOne = !playerOne;
}