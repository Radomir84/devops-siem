let array1 = [1,6,23,8,4,98,3,7,3,98,4,98, 7, 6, 7, 19, 20,11];
let array2 = [1,6,23,8];



function sumTing(array) {
    let sumLast = 0;
    sumLast = array[0] + array[array.length - 1]
    console.log(sumLast);
    return sumLast;
}
sumTing(array1);
sumTing(array2);

