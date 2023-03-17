let array = ["rajavalli", "sakthi", "fathima", "nivi", "dhivi", "latha"];
function letterDigit(array) {
    let letterDigitNum = [];
    for (let i = 0; i < array.length; i++) {
        letterDigitNum.push(array[i]);
        letterDigitNum.push(array[i].length);
    }
    return letterDigitNum;
}
console.log(letterDigit(array));
document.write("Letter digit calculate in array:" + (letterDigit(array)))
