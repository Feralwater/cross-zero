let occupiedCells = [];
let cellsWithCross = [];
let cellsWithZero = [];


userTurn();


function userTurn() {
    document.getElementById('block').onclick = function (event) {
        let cell_text = event.target.innerHTML;
        let occupiedCross = document.getElementsByClassName('cell');
        if (cell_text !== "") {
            alert("occupied!");
        } else {
            event.target.innerHTML = 'X';
            for (let i = 0; i < 9; i++) {
                {
                    if (occupiedCross[i].innerHTML === 'X' && occupiedCells.includes(i) === false) {
                        occupiedCells.push(i);
                        cellsWithCross.push(i);
                        isGameOver(occupiedCells);
                    }
                }
            }
            computerTurn();
            checkWinner();
        }
    }

}


function computerTurn() {
    let number = Math.floor(Math.random() * 9);

    while (occupiedCells.includes(number) === true) {
        number = Math.floor(Math.random() * 9);
    }
    let classes = [];

    Array.from(document.querySelector('#block').children).forEach(e => classes.push(e.classList.toString()));
    document.querySelector('#block').children[number].innerHTML = "O";
    let occupiedZero = document.getElementsByClassName('cell');
    for (let i = 0; i < 9; i++) {
        if (occupiedZero[i].innerHTML === 'O' && occupiedCells.includes(i) === false) {
            occupiedCells.push(i);
            cellsWithZero.push(i);
            isGameOver(occupiedCells);
            break
        }

    }
}

function checkWinner() {
    let winSells = document.getElementsByClassName('cell');
    if (winSells[0].innerHTML === 'X' && winSells[1].innerHTML === 'X' && winSells[2].innerHTML === 'X') alert('crosses won')
    if (winSells[3].innerHTML === 'X' && winSells[4].innerHTML === 'X' && winSells[5].innerHTML === 'X') alert('crosses won')
    if (winSells[6].innerHTML === 'X' && winSells[7].innerHTML === 'X' && winSells[8].innerHTML === 'X') alert('crosses won')
    if (winSells[0].innerHTML === 'X' && winSells[3].innerHTML === 'X' && winSells[6].innerHTML === 'X') alert('crosses won')
    if (winSells[1].innerHTML === 'X' && winSells[4].innerHTML === 'X' && winSells[7].innerHTML === 'X') alert('crosses won')
    if (winSells[2].innerHTML === 'X' && winSells[5].innerHTML === 'X' && winSells[8].innerHTML === 'X') alert('crosses won')
    if (winSells[0].innerHTML === 'X' && winSells[4].innerHTML === 'X' && winSells[8].innerHTML === 'X') alert('crosses won')
    if (winSells[2].innerHTML === 'X' && winSells[4].innerHTML === 'X' && winSells[6].innerHTML === 'X') alert('crosses won')

    if (winSells[0].innerHTML === 'O' && winSells[1].innerHTML === 'O' && winSells[2].innerHTML === 'O') alert('zero won')
    if (winSells[3].innerHTML === 'O' && winSells[4].innerHTML === 'O' && winSells[5].innerHTML === 'O') alert('zero won')
    if (winSells[6].innerHTML === 'O' && winSells[7].innerHTML === 'O' && winSells[8].innerHTML === 'O') alert('zero won')
    if (winSells[0].innerHTML === 'O' && winSells[3].innerHTML === 'O' && winSells[6].innerHTML === 'O') alert('zero won')
    if (winSells[1].innerHTML === 'O' && winSells[4].innerHTML === 'O' && winSells[7].innerHTML === 'O') alert('zero won')
    if (winSells[2].innerHTML === 'O' && winSells[5].innerHTML === 'O' && winSells[8].innerHTML === 'O') alert('zero won')
    if (winSells[0].innerHTML === 'O' && winSells[4].innerHTML === 'O' && winSells[8].innerHTML === 'O') alert('zero won')
    if (winSells[2].innerHTML === 'O' && winSells[4].innerHTML === 'O' && winSells[6].innerHTML === 'O') alert('zero won')
}

const isGameOver = (arr) => {
    if (arr.length === 9) {
        arr.length = 0
        alert("game is over");
    }
}
