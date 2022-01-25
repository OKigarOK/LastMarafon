function Calc(action, a, b) {
    const isNotValid = (typeof a !== 'number') || (typeof b !== 'number');
    const operations = {
        'sub': a - b,
        'sum': a + b,
        'multi': a * b,
        'div': a / b,
        'deg': a ** b,
        'rem': a % b,
    }
    if (isNotValid) {
        return 'Error';
    } else if (action in operations) {
        return operations[action];
    }
    return 'unknown operation';
}

console.log(Calc('sum', 10, 5));
console.log(Calc('multi', 10, 5));
console.log(Calc('div', 10, 5));
console.log(Calc('sub', 10, 5));
console.log(Calc('deg', 10, 5));
console.log(Calc('rem', 10, 5));
console.log(Calc('divdeg', 10, 5));
console.log(Calc('div', 10, '5'));
console.log(Calc(10));