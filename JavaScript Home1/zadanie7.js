//Calculate average value from the given array for even numbers [1,6,23,8,4,98,3,7,3,98,4,98]


let numbers = [1,6,23,8,4,98,3,7,3,98,4,98];	// dekl. zmiennej z tablicą liczb
let average = 0; // dekl. zmiennej pomocniczej zawierającą średnią z liczb
let sum = 0;	// dekl. zmiennej p. zawierającą sumę z liczb z tablicy


for( let i = 0; i < numbers.length; i++)
{	// petla która iteruje każdy element tablicy
	sum = sum + numbers[i];	// so naszej zmiennej sum liczbe z naszej iteracji
}
average = sum / numbers.length;	// do zmienej average przypisujemy dzielenie sumy liczb z tablicy przez ilość liczb z tablicy
console.log(average);