let numbers = [1,6,23,8,4,98,3,7,3,98,4,98];   // deklaracja zmiennej z tablicą liczb.
let minNumber,		// dekl. zmiennej pomocniczej trzymajacej najmniejszą liczbę, pusta zmienna
    maxNumber,		// dekl. zmiennej pomocniczej trzymajacej najwiejszą liczbę, pusta zmienna
    number = 0;	// dekl. zmiennej trzymającej naszą liczbę z danego indeksu tablicy

for (let i = 0; i < numbers.length; i++){	// petla która literuje kazdy element tablicy
	number = numbers[i];	// przypisujemy liczbę z indeksu tablicy do naszej zmienej pomocniczej
  
  if (!maxNumber || number > maxNumber) {	//warunek logiczny LUB. 1 warunek: True -> jesli maxNumber jest pusty (negacja); 2 warunek: True -> jesli number jest większy niż aktualny maxNumber
    maxNumber = number;	// przypisz number do zmiennej pomocniczej maxNumber (liczba pod zmienna number stał się naszą aktualnie najwiekszą liczbą)
  }

  if (!minNumber || number < minNumber) {//warunek logiczny LUB. 1 warunek: True -> jesli minNumber jest pusty (negacja); 2 warunek: True -> jesli number jest mniejszy niż aktualny minNumber
    minNumber = number;	//przypisz number do zmiennej pomocniczej minNumber ( liczba pod zmienna number stała się naszą aktualnie najmnijszą liczbą)
  }
}

console.log(minNumber);
console.log(maxNumber);