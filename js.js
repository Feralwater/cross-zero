// let counter = 0;
//
// document.getElementById('block').onclick = function (event) {
//
//     if (event.target.className === 'cell') {
//         counter % 2 === 0 ? event.target.innerHTML = 'X' : event.target.innerHTML = '0';
//         counter++;
//         checkWinner();
//     }
// }
//
// let checkWinner = () => {
//     let winSells = document.getElementsByClassName('cell');
//     if (winSells[0].innerHTML === 'X' && winSells[1].innerHTML === 'X' && winSells[2].innerHTML === 'X') alert('crosses won')
//     if (winSells[3].innerHTML === 'X' && winSells[4].innerHTML === 'X' && winSells[5].innerHTML === 'X') alert('crosses won')
//     if (winSells[6].innerHTML === 'X' && winSells[7].innerHTML === 'X' && winSells[8].innerHTML === 'X') alert('crosses won')
//     if (winSells[0].innerHTML === 'X' && winSells[3].innerHTML === 'X' && winSells[6].innerHTML === 'X') alert('crosses won')
//     if (winSells[1].innerHTML === 'X' && winSells[4].innerHTML === 'X' && winSells[7].innerHTML === 'X') alert('crosses won')
//     if (winSells[2].innerHTML === 'X' && winSells[5].innerHTML === 'X' && winSells[8].innerHTML === 'X') alert('crosses won')
//     if (winSells[0].innerHTML === 'X' && winSells[4].innerHTML === 'X' && winSells[8].innerHTML === 'X') alert('crosses won')
//     if (winSells[2].innerHTML === 'X' && winSells[4].innerHTML === 'X' && winSells[6].innerHTML === 'X') alert('crosses won')
//
//     if (winSells[0].innerHTML === '0' && winSells[1].innerHTML === '0' && winSells[2].innerHTML === '0') alert('zero won')
//     if (winSells[3].innerHTML === '0' && winSells[4].innerHTML === '0' && winSells[5].innerHTML === '0') alert('zero won')
//     if (winSells[6].innerHTML === '0' && winSells[7].innerHTML === '0' && winSells[8].innerHTML === '0') alert('zero won')
//     if (winSells[0].innerHTML === '0' && winSells[3].innerHTML === '0' && winSells[6].innerHTML === '0') alert('zero won')
//     if (winSells[1].innerHTML === '0' && winSells[4].innerHTML === '0' && winSells[7].innerHTML === '0') alert('zero won')
//     if (winSells[2].innerHTML === '0' && winSells[5].innerHTML === '0' && winSells[8].innerHTML === '0') alert('zero won')
//     if (winSells[0].innerHTML === '0' && winSells[4].innerHTML === '0' && winSells[8].innerHTML === '0') alert('zero won')
//     if (winSells[2].innerHTML === '0' && winSells[4].innerHTML === '0' && winSells[6].innerHTML === '0') alert('zero won')
// }

let occupiedCells = [];
let cellsWithCross = [];
let cellsWithZero = [];
let isWinner = false;
let arr = []

document.getElementById('block').onclick = function (event) {
    let cell_text = event.target.innerHTML;
    let occupiedCross = document.getElementsByClassName('cell');
    if (cell_text !== "")
        alert("occupied!");
    else {
        event.target.innerHTML = 'X';
        for (let i = 0; i < 9; i++) {
            {
                if (occupiedCross[i].innerHTML === 'X' && occupiedCells.includes(i) === false) {
                    occupiedCells.push(i);
                    cellsWithCross.push(i);
                    if (occupiedCells.length === 9) {
                        occupiedCells.length=0// noneVictory();
                        alert("game over");
                    }
                }
            }
        }

        // mass_x.sort(mass_x);

        // // let v = victory(mass_x, "Игрок");


        // if (cellsWithCross.length !== 0 && occupiedCells.length < 9) {
        computerTurn();
        // }
        // else
        // if (occupiedCells.length === 9 && v !== 1)
        //     noneVictory();

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
            if (occupiedCells.length === 9) {
                occupiedCells.length=0
                // noneVictory();
                alert("game over");
            }
            break
        }

    }
    console.log(occupiedCells)
}


