function Calc(action, a, b) {
    const isNotValid = (typeof a !== 'number') || (typeof b !== 'number');
    if (isNotValid) {
        return 'Error';
    } else {
        switch (action) {
            case 'sum':
                return a + b;
            case 'multi':
                return a * b;
            case 'div':
                return a / b;
            case 'diff':
                return a - b;
            case 'deg':
                return a ** b;
            case 'rem':
                return a % b;
            default:
                return 'unknown operation'
        }
    }
}

console.log(Calc('sum', 10, 5));
console.log(Calc('multi', 10, 5));
console.log(Calc('div', 10, 5));
console.log(Calc('diff', 10, 5));
console.log(Calc('deg', 10, 5));
console.log(Calc('rem', 10, 5));
console.log(Calc('divdeg', 10, 5));
console.log(Calc('div', 10, '5'));
console.log(Calc('div', 10, ));

