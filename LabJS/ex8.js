const array1 = [1,6,23,8,4,98,3,7,3,98,4,98, 7, 6, 7, 19, 20,11];

function nowa(array, numer) {
    let tablica1 = [];
    for (let i=0; i < numer; i++) {
        const numer1 = Math.round(Math.random() * array.length);
        tablica1.push(array[numer1]);
    }
    console.log(tablica1);
    let wartoscMin = tablica1[0];
    for (let i=1; i < tablica1.length; i++) {
        if (tablica1[i] < wartoscMin) {
            wartoscMin = tablica1[i];
        }
    }
    return wartoscMin;
}
console.log(nowa(array1,4));