const array1 = [1,6,23,8,4,98,3,7,3,98,4,98, 7, 6, 7, 19, 20,11];

function tablica(array) {
    let arrayNowa = [];
    const numberLength = array.length;
    for (let i=0; i < numberLength; i++) {
        let number1 = Math.round(Math.random() * (array.length - 1));
        let number2 = array[number1];
        array.splice(number1, 1);
        arrayNowa.push(number2);
    }
    return arrayNowa;
}
console.log(tablica(array1));