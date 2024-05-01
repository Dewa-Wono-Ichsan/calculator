let numberOne = 0
let numberTwo = 0




function buttonNumber() {

    if (result.textContent.includes('+') === false
        && result.textContent.includes('-') === false
        && result.textContent.includes('x') === false
        && result.textContent.includes('/') === false) {

    
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
    else if (result.textContent.includes('-') === true) {
        
        if (result.textContent.at(-1) === '-') {
        
            result.textContent += ` ${this.textContent}`
        } 
        else {
        
            result.textContent += `${this.textContent}`
        }
        numberTwo = Number(result.textContent.slice(result.textContent.indexOf('-') + 1))
    }
    else if (result.textContent.includes('x') === true) {
        
        if (result.textContent.at(-1) === 'x') {
        
            result.textContent += ` ${this.textContent}`
        } 
        else {
        
            result.textContent += `${this.textContent}`
        }
        numberTwo = Number(result.textContent.slice(result.textContent.indexOf('x') + 1))
    }
    else if (result.textContent.includes('/') === true) {
        
        if (result.textContent.at(-1) === '/') {
        
            result.textContent += ` ${this.textContent}`
        } 
        else {
        
            result.textContent += `${this.textContent}`
        }
        numberTwo = Number(result.textContent.slice(result.textContent.indexOf('/') + 1))
    }
}

const result = document.querySelector('.result-number')

const one = document.querySelector('button#number-one')
one.addEventListener('click', buttonNumber
)

const two = document.querySelector('button#number-two')
two.addEventListener('click', buttonNumber
)

const three = document.querySelector('button#number-three')
three.addEventListener('click',
buttonNumber
)

const four = document.querySelector('button#number-four')
four.addEventListener('click',
buttonNumber
)

const five = document.querySelector('button#number-five')
five.addEventListener('click',
buttonNumber
)

const six = document.querySelector('button#number-six')
six.addEventListener('click',
buttonNumber
)

const seven = document.querySelector('button#number-seven')
seven.addEventListener('click',
buttonNumber
)

const eight = document.querySelector('button#number-eight')
eight.addEventListener('click',
buttonNumber
)

const nine = document.querySelector('button#number-nine')
nine.addEventListener('click',
buttonNumber
)

const zero = document.querySelector('button#number-zero')
zero.addEventListener('click',
function() {
        if (result.textContent.includes('+') === false
            && result.textContent.includes('-') === false
            && result.textContent.includes('x') === false
            && result.textContent.includes('/') === false) {
        
            if(result.textContent === '') {
                
                result.textContent
            }
            else {
            
                result.textContent += `${this.textContent}`
                numberOne = Number(result.textContent)
            }
        }
        else if (result.textContent.includes('+') === true) {

            if (result.textContent.charAt(result.textContent.indexOf('+') + 2) === '') {
                result.textContent
            }
            else {

                result.textContent += `${this.textContent}`
                let positionTwo = result.textContent.slice(result.textContent.indexOf('+')+1)
                numberTwo = Number(positionTwo)
            }
        }
        else if (result.textContent.includes('-') === true) {

            if (result.textContent.charAt(result.textContent.indexOf('-') + 2) === '') {
                result.textContent
            }
            else {

                result.textContent += `${this.textContent}`
                let positionTwo = result.textContent.slice(result.textContent.indexOf('-')+1)
                numberTwo = Number(positionTwo)
            }
        }
        else if (result.textContent.includes('x') === true) {

            if (result.textContent.charAt(result.textContent.indexOf('x') + 2) === '') {
                result.textContent
            }
            else {

                result.textContent += `${this.textContent}`
                let positionTwo = result.textContent.slice(result.textContent.indexOf('x')+1)
                numberTwo = Number(positionTwo)
            }
        }
        else if (result.textContent.includes('/') === true) {

            if (result.textContent.charAt(result.textContent.indexOf('/') + 2) === '') {
                result.textContent
            }
            else {

                result.textContent += `${this.textContent}`
                let positionTwo = result.textContent.slice(result.textContent.indexOf('/')+1)
                numberTwo = Number(positionTwo)
            }
        }
    }
)

const decimal = document.querySelector('button#decimal-sign')
decimal.addEventListener('click', function() {

        if (result.textContent.includes('+') === false
            && result.textContent.includes('-') === false
            && result.textContent.includes('x') === false
            && result.textContent.includes('/') === false) {
        
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
        else if (result.textContent.includes('+') === true) {

            if (result.textContent.charAt(result.textContent.indexOf('+') + 2) === '') {

                result.textContent += ` ${0 + this.textContent}`
            }
            else if (result.textContent.slice(result.textContent.indexOf('+') + 1).includes('.') === false) {
                
                result.textContent += this.textContent
            }
            else {

            result.textContent
            }
        }
        else if (result.textContent.includes('-') === true) {

            if (result.textContent.charAt(result.textContent.indexOf('-') + 2) === '') {

                result.textContent += ` ${0 + this.textContent}`
            }
            else if (result.textContent.slice(result.textContent.indexOf('-') + 1).includes('.') === false) {
                
                result.textContent += this.textContent
            }
            else {

            result.textContent
            }
        }
        else if (result.textContent.includes('x') === true) {

            if (result.textContent.charAt(result.textContent.indexOf('x') + 2) === '') {

                result.textContent += ` ${0 + this.textContent}`
            }
            else if (result.textContent.slice(result.textContent.indexOf('x') + 1).includes('.') === false) {
                
                result.textContent += this.textContent
            }
            else {

            result.textContent
            }
        }
        else if (result.textContent.includes('/') === true) {

            if (result.textContent.charAt(result.textContent.indexOf('/') + 2) === '') {

                result.textContent += ` ${0 + this.textContent}`
            }
            else if (result.textContent.slice(result.textContent.indexOf('/') + 1).includes('.') === false) {
                
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
    
        if (result.textContent.includes(`${this.textContent}`) === false
            && result.textContent.includes('-') === false
            && result.textContent.includes('x') === false
            && result.textContent.includes('/') === false) {

            result.textContent += ` ${this.textContent} `
        } 
        else if (result.textContent.includes(`${this.textContent}`) === true) {

            result.textContent = `${numberOne + numberTwo} ${this.textContent}`
        
            if (result.textContent.includes('.') === true
                && result.textContent
                    .slice(
                        result.textContent
                        .indexOf('.') )
                    .length > 2
                ) {
                result.textContent = `${(numberOne + numberTwo).toFixed(2)} ${this.textContent}`
            }
            numberOne = Number(result.textContent.slice(0, result.textContent.indexOf(`${this.textContent}`)))
            numberTwo = 0
        }
        else if (result.textContent.includes('-') === true) {

            result.textContent = `${numberOne - numberTwo} ${this.textContent}`
        
            if (result.textContent.includes('.') === true
                && result.textContent
                    .slice(
                        result.textContent
                        .indexOf('.') )
                    .length > 2
                ) {
                result.textContent = `${(numberOne - numberTwo).toFixed(2)} ${this.textContent}`
            }
            numberOne = Number(result.textContent.slice(0, result.textContent.indexOf('-')))
            numberTwo = 0
        }
        else if (result.textContent.includes(`x`) === true) {

            result.textContent = `${numberOne * numberTwo} ${this.textContent}`
        
            if (result.textContent.includes('.') === true
                && result.textContent
                    .slice(
                        result.textContent
                        .indexOf('.'))
                    .length > 2
                ) {
                result.textContent = `${(numberOne * numberTwo).toFixed(2)} ${this.textContent}`
            }
            numberOne = Number(result.textContent.slice(0, result.textContent.indexOf(`${this.textContent}`)))
            numberTwo = 0
        }
        else if (result.textContent.includes('/') === true) {

            if (numberTwo === 0) {

                alert('cannot divide with number zero')
            }
            else if (numberTwo > 0) {

                result.textContent = `${numberOne / numberTwo} ${this.textContent}`
            
                if (result.textContent.includes('.') === true 
                    && result.textContent
                        .slice(
                            result.textContent
                            .indexOf('.'))
                        .length > 2
                    ) {
                    result.textContent = `${(numberOne / numberTwo).toFixed(2)} ${this.textContent}`
                }
                numberOne = Number(result.textContent.slice(0, result.textContent.indexOf(`${this.textContent}`)))
                numberTwo = 0
            }

        }
    }
)

const subtract = document.querySelector('.container-operator>button:nth-child(2)')
subtract.addEventListener('click', function() {
    
        if (result.textContent.includes(`${this.textContent}`) === false
            && result.textContent.includes('+') === false
            && result.textContent.includes('x') === false
            && result.textContent.includes('/') === false) {

            result.textContent += ` ${this.textContent} `
        } 
        else if (result.textContent.includes(`${this.textContent}`) === true) {

            result.textContent = `${numberOne - numberTwo} ${this.textContent}`
        
            if (result.textContent.includes('.') === true 
                && result.textContent
                    .slice(
                        result.textContent
                        .indexOf('.'))
                    .length > 2
                ) {
                result.textContent = `${(numberOne - numberTwo).toFixed(2)} ${this.textContent}`
            }
            numberOne = Number(result.textContent.slice(0, result.textContent.indexOf(`${this.textContent}`)))
            numberTwo = 0
        }
        else if (result.textContent.includes(`+`) === true) {

            result.textContent = `${numberOne + numberTwo} ${this.textContent}`
        
            if (result.textContent.includes('.') === true
                && result.textContent
                    .slice(
                        result.textContent
                        .indexOf('.'))
                    .length > 2
                ) {
                result.textContent = `${(numberOne + numberTwo).toFixed(2)} ${this.textContent}`
            }
            numberOne = Number(result.textContent.slice(0, result.textContent.indexOf(`${this.textContent}`)))
            numberTwo = 0
        }
        else if (result.textContent.includes(`x`) === true) {

            result.textContent = `${numberOne * numberTwo} ${this.textContent}`
        
            if (result.textContent.includes('.') === true
                && result.textContent
                    .slice(
                        result.textContent
                        .indexOf('.'))
                    .length > 2
                ) {
                result.textContent = `${(numberOne * numberTwo).toFixed(2)} ${this.textContent}`
            }
            numberOne = Number(result.textContent.slice(0, result.textContent.indexOf(`${this.textContent}`)))
            numberTwo = 0
        }
        else if (result.textContent.includes('/') === true) {

            if (numberTwo === 0) {

                alert('cannot divide with number zero')
            }
            else if (numberTwo > 0) {

                result.textContent = `${numberOne / numberTwo} ${this.textContent}`
            
                if (result.textContent.includes('.') === true 
                    && result.textContent
                        .slice(
                            result.textContent
                            .indexOf('.'))
                        .length > 2
                    ) {
                    result.textContent = `${(numberOne / numberTwo).toFixed(2)} ${this.textContent}`
                }
                numberOne = Number(result.textContent.slice(0, result.textContent.indexOf(`${this.textContent}`)))
                numberTwo = 0
            }

        }
    }
)

const multiply = document.querySelector('.container-operator > button:nth-child(3)')
multiply.addEventListener('click', function() {
            
        if (result.textContent.includes(`${this.textContent}`) === false
            && result.textContent.includes('+') === false
            && result.textContent.includes('-') === false
            && result.textContent.includes('/') === false) {

            result.textContent += ` ${this.textContent} `
        } 
        else if (result.textContent.includes(`${this.textContent}`) === true) {

            result.textContent = `${numberOne * numberTwo} ${this.textContent}`
        
            if (result.textContent.includes('.') === true 
                && result.textContent
                    .slice(
                        result.textContent
                        .indexOf('.'))
                    .length > 2
                ) {
                result.textContent = `${(numberOne * numberTwo).toFixed(2)} ${this.textContent}`
            }
            numberOne = Number(result.textContent.slice(0, result.textContent.indexOf(`${this.textContent}`)))
            numberTwo = 0
        }
        else if (result.textContent.includes(`+`) === true) {

            result.textContent = `${numberOne + numberTwo} ${this.textContent}`
        
            if (result.textContent.includes('.') === true
                && result.textContent
                    .slice(
                        result.textContent
                        .indexOf('.'))
                    .length > 2
                ) {
                result.textContent = `${(numberOne + numberTwo).toFixed(2)} ${this.textContent}`
            }
            numberOne = Number(result.textContent.slice(0, result.textContent.indexOf(`${this.textContent}`)))
            numberTwo = 0
        }
        else if (result.textContent.includes(`-`) === true) {

            result.textContent = `${numberOne - numberTwo} ${this.textContent}`
        
            if (result.textContent.includes('.') === true
                && result.textContent
                    .slice(
                        result.textContent
                        .indexOf('.'))
                    .length > 2
                ) {
                result.textContent = `${(numberOne - numberTwo).toFixed(2)} ${this.textContent}`
            }
            numberOne = Number(result.textContent.slice(0, result.textContent.indexOf(`${this.textContent}`)))
            numberTwo = 0
        }
        else if (result.textContent.includes('/') === true) {

            if (numberTwo === 0) {

                alert('cannot divide with number zero')
            }
            else if (numberTwo > 0) {

                result.textContent = `${numberOne / numberTwo} ${this.textContent}`
            
                if (result.textContent.includes('.') === true 
                    && result.textContent
                        .slice(
                            result.textContent
                            .indexOf('.'))
                        .length > 2
                    ) {
                    result.textContent = `${(numberOne / numberTwo).toFixed(2)} ${this.textContent}`
                }
                numberOne = Number(result.textContent.slice(0, result.textContent.indexOf(`${this.textContent}`)))
                numberTwo = 0
            }

        }
    }
)

const divide = document.querySelector('.container-operator > button:nth-child(4)')
divide.addEventListener('click', function() {

        if (result.textContent.includes(`${this.textContent}`) === false
            && result.textContent.includes('+') === false
            && result.textContent.includes('-') === false
            && result.textContent.includes('x') === false) {

            result.textContent += ` ${this.textContent} `
        } 
        else if (result.textContent.includes(`${this.textContent}`) === true) {

            if (numberTwo === 0) {

                alert('cannot divide with number zero')
            }
            else if (numberTwo > 0) {

                result.textContent = `${numberOne / numberTwo} ${this.textContent}`
            
                if (result.textContent.includes('.') === true 
                    && result.textContent
                        .slice(
                            result.textContent
                            .indexOf('.'))
                        .length > 2
                    ) {
                    result.textContent = `${(numberOne / numberTwo).toFixed(2)} ${this.textContent}`
                }
                numberOne = Number(result.textContent.slice(0, result.textContent.indexOf(`${this.textContent}`)))
                numberTwo = 0
            }

        }
        else if (result.textContent.includes(`+`) === true) {

            result.textContent = `${numberOne + numberTwo} ${this.textContent}`
        
            if (result.textContent.includes('.') === true
                && result.textContent
                    .slice(
                        result.textContent
                        .indexOf('.'))
                    .length > 2
                ) {
                result.textContent = `${(numberOne + numberTwo).toFixed(2)} ${this.textContent}`
            }
            numberOne = Number(result.textContent.slice(0, result.textContent.indexOf(`${this.textContent}`)))
            numberTwo = 0
        }
        else if (result.textContent.includes(`-`) === true) {

            result.textContent = `${numberOne - numberTwo} ${this.textContent}`
        
            if (result.textContent.includes('.') === true
                && result.textContent
                    .slice(
                        result.textContent
                        .indexOf('.'))
                    .length > 2
                ) {
                result.textContent = `${(numberOne - numberTwo).toFixed(2)} ${this.textContent}`
            }
            numberOne = Number(result.textContent.slice(0, result.textContent.indexOf(`${this.textContent}`)))
            numberTwo = 0
        }
        else if (result.textContent.includes(`x`) === true) {

            result.textContent = `${numberOne * numberTwo} ${this.textContent}`
        
            if (result.textContent.includes('.') === true
                && result.textContent
                    .slice(
                        result.textContent
                        .indexOf('.'))
                    .length > 2
                ) {
                result.textContent = `${(numberOne * numberTwo).toFixed(2)} ${this.textContent}`
            }
            numberOne = Number(result.textContent.slice(0, result.textContent.indexOf(`${this.textContent}`)))
            numberTwo = 0
        }    
    }
)

const equal = document.querySelector('#equal-sign')
equal.addEventListener('click', () => {

        if (result.textContent.includes('+')) {
    
            result.textContent = `${numberOne + numberTwo}`
        
            if (result.textContent.includes('.') === true 
                && result.textContent
                .slice(
                        result.textContent
                        .indexOf('.'))
                .length > 2) {

                result.textContent = `${(numberOne + numberTwo).toFixed(2)}`
            }
        }
        else if (result.textContent.includes('-')) {

            result.textContent = `${numberOne - numberTwo}`

            if (result.textContent.includes('.') === true 
                && result.textContent
                .slice(
                        result.textContent
                        .indexOf('.'))
                .length > 2) {

                result.textContent = `${(numberOne - numberTwo).toFixed(2)}`
            }
        }
        else if (result.textContent.includes('x')) {

            result.textContent = `${numberOne * numberTwo}`

            if (result.textContent.includes('.') === true 
                && result.textContent
                .slice(
                        result.textContent
                        .indexOf('.'))
                .length > 2) {

                result.textContent = `${(numberOne * numberTwo).toFixed(2)}`
            }
        }
        else if (result.textContent.includes('/')) {
            if (numberTwo === 0) {
                alert('cannot divide with number zero')
            }
            else if (numberTwo > 0) {

                result.textContent = `${numberOne / numberTwo}`
    
                if (result.textContent.includes('.') === true 
                    && result.textContent
                    .slice(
                            result.textContent
                            .indexOf('.'))
                    .length > 2) {
    
                    result.textContent = `${(numberOne / numberTwo).toFixed(2)}`
                }
            }
        }
        numberOne = Number(result.textContent)
        numberTwo = 0
    }
)

const clear = document.querySelector('#clear')
clear.addEventListener('click', function() {
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

const body = document.querySelector('body')
body.addEventListener('keydown'
, function (e) {
    
        if (e.key === '1') {

            keyNumber('1')
        }
        if (e.key === '2') {

            keyNumber('2')
        }
        if (e.key === '3') {

            keyNumber('3')
        }
        if (e.key === '4') {

            keyNumber('4')
        }
        if (e.key === '5') {

            keyNumber('5')
        }
        if (e.key === '6') {

            keyNumber('6')
        }
        if (e.key === '7') {

            keyNumber('7')
        }
        if (e.key === '8') {

            keyNumber('8')
        }
        if (e.key === '9') {

            keyNumber('9')
        }
    }
)

function keyNumber(keyboardValue) {

    if (result.textContent.includes('+') === false
        && result.textContent.includes('-') === false
        && result.textContent.includes('x') === false
        && result.textContent.includes('/') === false) {

    
        result.textContent += `${keyboardValue}`
        numberOne = Number(result.textContent)
    }
    else if (result.textContent.includes('+') === true) {
        
        if (result.textContent.at(-1) === '+') {
        
            result.textContent += ` ${keyboardValue}`
        } 
        else {
        
            result.textContent += `${keyboardValue}`
        }
        numberTwo = Number(result.textContent.slice(result.textContent.indexOf('+') + 1))
    }
    else if (result.textContent.includes('-') === true) {
        
        if (result.textContent.at(-1) === '-') {
        
            result.textContent += ` ${keyboardValue}`
        } 
        else {
        
            result.textContent += `${keyboardValue}`
        }
        numberTwo = Number(result.textContent.slice(result.textContent.indexOf('-') + 1))
    }
    else if (result.textContent.includes('x') === true) {
        
        if (result.textContent.at(-1) === 'x') {
        
            result.textContent += ` ${keyboardValue}`
        } 
        else {
        
            result.textContent += `${keyboardValue}`
        }
        numberTwo = Number(result.textContent.slice(result.textContent.indexOf('x') + 1))
    }
    else if (result.textContent.includes('/') === true) {
        
        if (result.textContent.at(-1) === '/') {
        
            result.textContent += ` ${keyboardValue}`
        } 
        else {
        
            result.textContent += `${keyboardValue}`
        }
        numberTwo = Number(result.textContent.slice(result.textContent.indexOf('/') + 1))
    }
}