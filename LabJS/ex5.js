const array1 = [1,6,23,8,4,98,3,7,3,98,4,98, 7, 6, 7, 19, 20,11];


function summary(array) {
    let tableNew = [];
    for(let i=0; i<array.length; i=i+2) {
        const number = array[i] + array[i+1];
        tableNew.push(number);
    }
    return tableNew;
}
console.log(summary(array1));