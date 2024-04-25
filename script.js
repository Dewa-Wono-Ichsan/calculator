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

    if (result.textContent.includes('+') === false) {

        
        result.textContent += `${this.textContent}`
        numberOne = Number(result.textContent)
    }
    else if (result.textContent.includes('+') === true) {
        if (result.textContent.at(-1) === '+') {
            
            result.textContent += ` ${this.textContent}`
        } 
        else {
            
            result.textContent += `${this.textContent}`
        }
        numberTwo = Number(result.textContent.slice(result.textContent.indexOf('+') + 1))
    }
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
    if (result.textContent.includes('+') === false) {
        
        if(result.textContent === '') {
            result.textContent
        }
        else {
            
            result.textContent += `${this.textContent}`
            numberOne = Number(result.textContent)
        }
    }
    else if (result.textContent.includes('+')) {

        if (result.textContent.charAt(result.textContent.indexOf('+') + 2) === '') {
            result.textContent
        }
        else {

            result.textContent += `${this.textContent}`
            let positionTwo = result.textContent.slice(result.textContent.indexOf('+')+1)
            numberTwo = Number(positionTwo)
        }
    }
    }
)

const decimal = document.querySelector('button#decimal-sign')
decimal.addEventListener('click', function() {

        if (result.textContent.includes('+') === false) {
        
            if(result.textContent === '') {

                result.textContent = 0 + this.textContent
            }
            else if (result.textContent.includes('.')) {
            
                result.textContent
            } 
            else {

                result.textContent += this.textContent
            }
        }
        else if (result.textContent.includes('+')) {

            if (result.textContent.charAt(result.textContent.indexOf('+') + 2) === '') {

                result.textContent += 0 + this.textContent
            }
            else if (result.textContent.slice(result.textContent.indexOf('+') + 1).includes('.') === false) {
                
                result.textContent += this.textContent
            }
            else {

            result.textContent
            }
        }
    }
)

const add = document.querySelector('.container-operator>button:nth-child(1)')
add.addEventListener('click', function() {
    
    if (result.textContent.includes(`${this.textContent}`) === false) {

        result.textContent += ` ${this.textContent} `
    } 
    else if (result.textContent.includes(`${this.textContent}`) === true) {

        result.textContent = `${numberOne + numberTwo} ${this.textContent}`
        numberOne = Number(result.textContent.slice(0, result.textContent.indexOf(`${this.textContent}`)))
        numberTwo = 0
    }
    }
)

const equal = document.querySelector('#equal-sign')
equal.addEventListener('click', () => {

    if (result.textContent.includes('+')) {
    
        result.textContent = `${numberOne + numberTwo}`
        numberOne = Number(result.textContent)
        numberTwo = 0
    }
})

const clear = document.querySelector('#clear')
clear.addEventListener('click', () => {
    result.textContent = ''
    numberOne = 0
    numberTwo = 0
    }
)

const undo = document.querySelector('button#undo')
undo.addEventListener('click', function() {

    if (result.textContent.at(-2) === ' ') {

            result.textContent = result.textContent.split('').toSpliced(result.textContent.length-2).join('')
            numberTwo = 0
        }
    else {

            result.textContent = result.textContent.split('').toSpliced(result.textContent.length-1).join('')

            if (result.textContent.includes('+') === true) {

                numberTwo = Number(result.textContent.slice(result.textContent.indexOf('+') + 1))
            } 
            else if (result.textContent.includes('+') === false) {

                numberOne = Number(result.textContent)
            }
        }    
    }
)