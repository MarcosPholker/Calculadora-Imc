export {calcImc, notNumber}

function calcImc (weight, width){
    return (weight / ((width / 100) ** 2)).toFixed(0)
}

function notNumber(notNumber){
    return isNaN(notNumber) || notNumber == ''
}

