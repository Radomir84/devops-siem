function object(parametr1, parametr2)
 {
    const plus = parametr1 + parametr2;
    const minus = parametr1 - parametr2;
    const mnozenie = parametr1 * parametr2;
    const dzielenie = parametr1 / parametr2;
    const obiekt = {
        pluSS: plus,
        minuSS: minus,
        multiply: mnozenie,
        divide: dzielenie
    }
    return obiekt;
}

console.log(object(2, 11));
