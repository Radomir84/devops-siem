const array1 = [1,6,23,8,4,98,3,7,3,98,4,98, 7, 6, 7, 19, 20,11];
const array2 = [2,5,7,22,8,9];
const array3 = [10, 5, 22, 8,99,13];



function numbers(array) {
    let sumArray = 0;
    for (let i = 0; i < array.length; i++ )
        sumArray = sumArray + array[i]
        console.log(sumArray); 
        return sumArray;
}
numbers(array1);
numbers(array2);
numbers(array3);
























