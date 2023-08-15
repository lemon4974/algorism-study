// 1. 입력값이 한 개일 때(한 줄)
// const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().trim();

const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();
// const compressed = input.join('');
const compressed = '33(562(71(9)))';

function decompressString(compressed) {
    let stack = [];
    let num = '';
    let currentStr = '';

    for (let char of compressed) {
        if (char == '('){
            stack.push(currentStr);
            stack.push(parseInt(num));
            currentStr = '';
            num = '';
            console.log('if');
            console.log(currentStr);
            console.log(stack);
        }else if( char == ')'){
            let repeat = stack.pop();
            let prevStr = stack.pop();
            currentStr = prevStr + currentStr.repeat(repeat);

            console.log('2 else if');
            console.log(currentStr);
            console.log(stack);
        }else if (!isNaN(char)) {
            num += char;
            console.log('3 else if');
            console.log(currentStr);
            console.log(stack);
        } else {
            currentStr += char;
            console.log('else');
            console.log(currentStr);
            console.log(stack);

        }

    }
    return currentStr.length;
}