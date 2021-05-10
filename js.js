const CROSS_CLASS = 'cross'
const ZERO_CLASS = 'zero'
const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
const cellElements = document.querySelectorAll('.cell')
const block = document.getElementById('block')
const winningMessageElement = document.getElementById('winningMessage')
const restartButton = document.getElementById('restartButton')
const winningMessageTextElement = document.querySelector('.end-game-message')
let circleTurn

startGame()

restartButton.addEventListener('click', startGame)

function startGame() {
    circleTurn = false
    cellElements.forEach(cell => {
        cell.classList.remove(CROSS_CLASS)
        cell.classList.remove(ZERO_CLASS)
        cell.removeEventListener('click', handleClick)
        cell.addEventListener('click', handleClick, {once: true})
    })
    setblockHoverClass()
    winningMessageElement.classList.remove('show')
}


function chooseSuitableCell() {
    while (true) {
        const index = Math.floor(Math.random() * 9);
        const cellElement = cellElements[index];
        if (!cellElement.classList.contains(ZERO_CLASS) && !cellElement.classList.contains(CROSS_CLASS)) {
            return cellElement
        }
    }
}

function makeTurn(cell) {
    const currentClass = circleTurn ? ZERO_CLASS : CROSS_CLASS
    placeMark(cell, currentClass)
    if (checkWin(currentClass)) {
        endGame(false)
    } else if (isDraw()) {
        endGame(true)
    } else {
        swapTurns()
        setblockHoverClass()
    }
}

function handleClick(e) {
    const userCell = e.target
    makeTurn(userCell);
    if (isDraw()) {
        return
    }
    const compCell = chooseSuitableCell()
    compCell.removeEventListener('click', handleClick)
    makeTurn(compCell)
}

function endGame(draw) {
    if (draw) {
        winningMessageTextElement.innerText = 'Draw!'
    } else {
        winningMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} Wins!`
    }
    winningMessageElement.classList.add('show')
}

function isDraw() {
    return [...cellElements].every(cell => {
        return cell.classList.contains(CROSS_CLASS) || cell.classList.contains(ZERO_CLASS)
    })
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}

function swapTurns() {
    circleTurn = !circleTurn
}

function setblockHoverClass() {
    block.classList.remove(CROSS_CLASS)
    block.classList.remove(ZERO_CLASS)
    if (circleTurn) {
        block.classList.add(ZERO_CLASS)
    } else {
        block.classList.add(CROSS_CLASS)
    }
}

function checkWin(currentClass) {
    let b2 = WINNING_COMBINATIONS.some(combination => {
        let b1 = combination.every(index => {
            let cellElement = cellElements[index];
            let classList = cellElement.classList;
            let b = classList.contains(currentClass);
            return b
        });
        return b1
    });
    return b2
}