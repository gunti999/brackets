module.exports = function check(str, bracketsConfig) {
    let stack = [];
    let obj = {};

    bracketsConfig.forEach(el => {
        obj[el['0']] = el[1];
    })

    let bracketExample = Object.keys(obj);
    let bracketValues = Object.values(obj);

    for (let i = 0; i < str.length; i++) {
        const bracket = str[i];
        if (bracket === obj[stack[stack.length - 1]]) {
            stack.pop()
        } else if (bracketExample.indexOf(bracket) !== -1) {
            stack.push(bracket);
        } else if (bracketValues.indexOf(bracket) !== -1) {
            return false;
        }
    }

    if (!stack.length) {
        return true;
    } else {
        return false;
    }
}