//Declarando Variáveis
let mult = document.getElementById('mult')
let division = document.getElementById('division')
let sum = document.getElementById('sum')
let sub = document.getElementById('sub')

let Result = document.getElementById('Result')

Result.value = ""

function Clear() {
    Result.value = ""
    Result.innerHTML = Result.value
}

function display(value) {
    Result.value += value;
    Result.innerHTML = Result.value
}

function calculate() {
    let ResultValue = Result.value
    //Se for Soma(+)
    if (ResultValue.includes('+')) {
        let Soma
        posicaoSoma = ResultValue.indexOf('+')
        num1 = Number(ResultValue.slice(0, posicaoSoma ))
        num2 = Number(ResultValue.slice(posicaoSoma+1, ResultValue.lenght))
        Soma = num1 + num2
        Result.innerHTML = Soma
    }
    //Se for Subtração(+)
    else if (ResultValue.includes('-')) {
        let Sub
        posicaoSub = ResultValue.indexOf('-')
        num1 = Number(ResultValue.slice(0, posicaoSub ))
        num2 = Number(ResultValue.slice(posicaoSub+1, ResultValue.lenght))
        Sub = num1 - num2
        Result.innerHTML = Sub
    }
    //Se for Soma(+)
    else if (ResultValue.includes('*')) {
        let Mult
        posicaoMult = ResultValue.indexOf('*')
        num1 = Number(ResultValue.slice(0, posicaoMult ))
        num2 = Number(ResultValue.slice(posicaoMult+1, ResultValue.lenght))
        Mult = num1 * num2
        Result.innerHTML = Mult
    }
    //Se for Soma(+)
    else if (ResultValue.includes('/')) {
        let Div
        posicaoDiv = ResultValue.indexOf('/')
        num1 = Number(ResultValue.slice(0, posicaoDiv ))
        num2 = Number(ResultValue.slice(posicaoDiv+1, ResultValue.lenght))
        Div = num1 / num2
        Result.innerHTML = Div
    }
    
}




