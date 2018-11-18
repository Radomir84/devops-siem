const array1 = [1,6,23,8,4,98,3,7,3,98,4,98, 7, 6, 7, 19, 20,11];
const array2 = [ 7, 6, 7, 19, 20,11];

function sumArray(x)
{
    let sumOfArray = 0;
    for(let i = 0; i < x.length; i++) {
        sumOfArray = sumOfArray + x[i];
    }
    return sumOfArray;   
}
console.log(sumArray(array1));
console.log(sumArray([1,2,3]));
console.log(sumArray([5,6,9,9,9,9,9,9,9,]));
console.log(sumArray(array2));