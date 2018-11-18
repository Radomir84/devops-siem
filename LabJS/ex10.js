const array1 = [1,6,23,8,4,98,3,7,3,98,4,98, 7, 6, 7, 19, 20,11];

function randomowa(array) {
    let suma = array[0];
    for (let i = 1; i < array.length; i++) {
        if (Math.round(Math.random())) {
            suma += array[i];                               // += to jest skrot suma = suma + array[i]
        } else {
            suma -= array[i];
         }
    }
    return suma;
}
console.log(randomowa(array1));