const printArrayIntersects = require("./array-intersection")

const arrayTypeA1 = [1,2,3,4,5];
const arrayTypeA2 = [1, 3, 5, 7,9];
const arrayTypeB1 = [1,1,1,1,1];
const arrayTypeB2 = [2,2,2,2,2];
const arrayTypeC1 = [1, 2, 3, 4, 5, true, 'time']
const arrayTypeC2 = [4, 2, 0, 'time', false, 0];

printArrayIntersects(arrayTypeA1, arrayTypeA2);
printArrayIntersects(arrayTypeB1, arrayTypeB2);
printArrayIntersects(arrayTypeC1, arrayTypeC2);