function getResultCalculation(action, a, b) {
    if ((typeof a !== 'number') || (a !== a) ||
        (typeof b !== 'number') || (b !== b)) {
        return 'Error';
    }
    switch (action) {
        case 'sum':
            return a + b;
        case 'multi':
            return a * b;
        case 'div':
            switch (b) {
                case 0 :
                    return "Error";
                default:
                    return a / b;
            }
        case 'diff':
            return a - b;
        case 'deg':
            return a ** b;
        case 'rem':
            switch (b) {
                case 0 :
                    return "Error";
                default:
                    return a % b;
            }
        default:
            return 'unknown operation'
    }
}

console.log(getResultCalculation('div', 10, 5));