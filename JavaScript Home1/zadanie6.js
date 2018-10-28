//////////////////Choose all the indexes on the highest value from the given array. [1,6,23,8,4,98,3,7,3,98,4,98]. 2 loop runs.  

let numbers = [1,6,23,8,4,98,3,7,3,98,4,98];
let maxNumber,	// dekl. zmiennej pomocniczej trzymajacej najmniejszą liczbę, pusta zmienna
    number = 0;	// dekl. zmiennej trzymającej naszą liczbę z danego indeksu tablicy
let indexTab = []; // dekl. zmiennej tablicowej trzymajacą indeksy z najwiekszą liczbą, z początku jest pusta

for (let i = 0; i < numbers.length; i++){	// petla która iteruje kazdy element tablicy
	number = numbers[i];	// przypisujemy liczbę z indeksu tablicy do naszej zmienej pomocniczej
  
  if (!maxNumber || number > maxNumber) {	//warunek logiczny LUB. 1 warunek: True -> jesli maxNumber jest pusty (negacja); 2 warunek: True -> jesli number jest większy niż aktualny maxNumber
    maxNumber = number;	// przypisz number do zmiennej pomocniczej maxNumber (liczba pod zmienna number stał się naszą aktualnie najwiekszą liczbą)
  }
}

for (let i = 0; i < numbers.length; i++){		//petla która iteruje kazdy element tablicy
	number = numbers[i];	// przypisuje liczbe z aktualnie rozpatrywanego indeksu tablicy do naszej zmiennej p.
  
  if(number == maxNumber){		// warunek sprawdzajacy czy dana liczba w indeksie jest równa naszej najwiekszej liczbie
  	indexTab.push(i);	// wrzuc numer indeksu z najwiekszą liczbą do naszej tablicy indeksów
  }
}

console.log(indexTab);