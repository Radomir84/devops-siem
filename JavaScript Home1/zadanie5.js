//////////////Choose longest string from the array. [‘Karol’, ‘Adam’,’Rogowski’,’Politechnika’,’Super’,’Weekend’]. One loop run

let words = ["Karol", "Adam","Rogowski","Politechnika","Super","Weekend"];	// tablica strigów
let word;	//dekl. zmienna pomocniczą, pusta zmiena, zmienna przetrzymuje wartość indeksu z tablicy
let longestWord = "";	// dekl. zmienna pomocnicza, zawierjąca aktualnie najłuższe słowo

for (let i = 0; i < words.length; i++) {	// petla przechodzi po wszystkich (iteruje) elementach tablicy
	word = words[i];	// przypisanie do zmienne p. aktualanego rozpatrywanego elementu tablicy
  if(word.length > longestWord.length) {	// warunek logiczny, czy słowo pod zmienna word jest dłuższe od aktualnie najdłuższego słowa pod zmienna longestWord.
  	longestWord = word;	// przypisanie do zmiennej p. nowo znalezionego najdłuższego słowa
  }
}
console.log(longestWord);
