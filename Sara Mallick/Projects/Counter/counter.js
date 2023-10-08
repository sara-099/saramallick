let number = Number(document.getElementById('number').textContent)

document.getElementById('Decrease').addEventListener('click', function () {
    number--
    document.getElementById('number').textContent = number
    if (number < 0) {
        document.getElementById('number').style.color = 'red'
    } else if (number === 0) {
        document.getElementById('number').style.color = 'rgb(35,35,91)'
    }
})

document.getElementById('increase').addEventListener('click', function () {
    number++
    document.getElementById('number').textContent = number
    if (number > 0) {
        document.getElementById('number').style.color = 'green'
    } else if (number === 0) {
        document.getElementById('number').style.color = 'rgb(35,35,91)'
    }
})

document.getElementById('reset').addEventListener('click', function () {
    number = 0
    document.getElementById('number').textContent = number
    document.getElementById('number').style.color = 'rgb(35,35,91)'
})