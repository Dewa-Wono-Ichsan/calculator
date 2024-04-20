let numberOne = 0
let operator = ''
let numberTwo = 0

function addNumber(a,b) {

    return a+b

}

function subtractNumber(a,b) {
    return a-b
}

function multiplyNumber(a,b) {
    return a*b
}

function divideNumber(a,b) {
    return a/b
}

function operatorNumbers() {

    numberOne
    operator
    numberTwo

    addNumber(numberOne, numberTwo)
    subtractNumber(numberOne,numberTwo)
    multiplyNumber(numberOne,numberTwo)
    divideNumber(numberOne,numberTwo)
    
}

const result = document.querySelector('.result-number')

const one = document.querySelector('button#number-one')
one.addEventListener('click',
function() {
    result.textContent = numberOne = 1
    }
)

const two = document.querySelector('button#number-two')
two.addEventListener('click',
function() {
    result.textContent = numberOne = 2
    }
)

const three = document.querySelector('button#number-three')
three.addEventListener('click',
function() {
    result.textContent = numberOne = 3
    }
)

const four = document.querySelector('button#number-four')
four.addEventListener('click',
function() {
    result.textContent = numberOne = 4
    }
)

const five = document.querySelector('button#number-five')
five.addEventListener('click',
function() {
    result.textContent = numberOne = 5
    }
)

const six = document.querySelector('button#number-six')
six.addEventListener('click',
function() {
    result.textContent = numberOne = 6
    }
)

const seven = document.querySelector('button#number-seven')
seven.addEventListener('click',
function() {
    result.textContent = numberOne = 7
    }
)

const eight = document.querySelector('button#number-eight')
eight.addEventListener('click',
function() {
    result.textContent = numberOne = 8
    }
)

const nine = document.querySelector('button#number-nine')
nine.addEventListener('click',
function() {
    result.textContent = numberOne = 9
    }
)

const zero = document.querySelector('button#number-zero')
zero.addEventListener('click',
function() {
    result.textContent = numberOne = 0
    }
)