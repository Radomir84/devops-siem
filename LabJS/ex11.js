

function dayToday() {
    const array = ['N', 'P', 'W', 'S', 'C','Pi', 'So'];
    const dzien = new Date();
    const terazniejszyDzien = dzien.getDay();
    const a = array[terazniejszyDzien];
    return a;
}
console.log(dayToday());    



