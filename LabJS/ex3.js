let liczba1 = 3;
let liczba2 = 5;
let liczba3 = 10;

function silnia(liczba) {
    let silniaSuma = 1;
    for( let i = 1; i <= liczba; i++) {
        silniaSuma = silniaSuma * i

    }   
    console.log(silniaSuma);
    return silniaSuma;

}
silnia(4);
silnia(liczba2);
silnia(liczba3);

