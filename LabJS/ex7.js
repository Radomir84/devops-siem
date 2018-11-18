const array1 = [1,6,23,8,4,98,3,7,3,98,4,98, 7, 6, 7, 19, 20,11];


function tablica(array) {
    const number = Math.random() * array.length - 1;
    const number2 = Math.round(number);
    const number3 = array[number2];
    return(number3);
}
console.log(tablica(array1));

