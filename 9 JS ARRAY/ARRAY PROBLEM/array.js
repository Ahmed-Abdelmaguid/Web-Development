function printReverse(array) {
    for (var index = (array.length - 1); index >= 0; index--) {
        console.log(array[index]);
    }
}  


function isUniform(array) {
    var fir = array[0];
    for (let index = 1; index < array.length; index++) {
        if (array[index] !== fir) {
            return false;
        }
    }
    return true
}

function sum(array) {
    var sum2 = 0;
    for (var index = 0; index < array.length; index++) {
        sum2+= array[index];
    }
    return sum2;
}  

function max(array) {
    var ma = array[0];
    for (var index = 1; index < array.length; index++) {
        if (array[index] > ma) {
            ma = array[index];
        }
    }
    return ma;
}  