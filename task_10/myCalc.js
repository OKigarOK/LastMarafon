function getResultCalculation(action, a, b) {
    if ((typeof a !== 'number') || (a !== a) ||
        (typeof b !== 'number') || (b !== b)) {
        return 'Error';
    }
    if (action === 'sum') {
        return a + b;
    } else if (action === 'multi') {
        return a * b;
    } else if (action === 'div') {
        if (b === 0) {
            return "Error";
        } else return a / b;
    } else if (action === 'diff') {
        return a - b;
    } else if (action === 'deg') {
        return a ** b;
    } else if (action === 'rem') {
        if (b === 0) {
            return "Error";
        } else return a % b;
    } else {
        return 'unknown operation';
    }
}

console.log(getResultCalculation('sum', 1, 2));