const board = document.querySelector('#board')
const colors = ['#CFD6F7', '#889CFB', '#4A68F7', '#072ACF', '#07219C', '#101D5B']
const SQUARES_NUMBER = 400

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color} 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.background = '#f0f6f7'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]

}