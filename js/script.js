const getRecursive = (digit, degree) => {
    if(degree === 1) {
        return digit
    } else {
        return digit * getRecursive(digit , degree - 1)
    }
}



console.log(getRecursive(2,5))

const getRecursive2 = (digit,degree) => {
    let result = 1;
    for(let i = 0; i < degree; i++) {
        result *= digit
    }

    return result
}

console.log(getRecursive2(2,5))