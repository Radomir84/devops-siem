///////////Calculate the sum of the odd items [1,6,23,8,4,98,3,7,3,98,4,98]


let numbers = [1,6,23,8,4,98,3,7,3,98,4,98];   // deklaracja zmiennej z tablicą liczb.
let sum = 0;		// dekladracja zmiennej w której trzymać będziemy sumę liczb niepatrzystych
let number;			// Zmienna tworzymy poza pętlą żeby JS nie tworzył zmiennej za każdą iteracją pętli tylko przypisywał nową wartość (dodatkowe info)

for(let i = 0; i < numbers.length; i++) {			// Tworzymy pętle, która przejdzie przez wszystkie elementy tablicy liczb
 	number = numbers[i];		// tworzymy zmienną która będzie trzymać naszą liczbę z danego indexu tablicy (np. liczba z 1 miejca tablicy i kolejnych)
  if (number % 2 !== 0 ){	// Tworzymy warunek logiczny, który sprawdzi nam czy liczba z danej iteracji jest nieparzysta  
    sum = sum + number;		// Do naszej zmiennej sum (trzymającej sume liczb niepatrzystych) dodajemy nową liczbę a nastepnie nadpisujemy zmienną nową wartością 
  }
}		// Konieć interacji pętli

console.log(sum);