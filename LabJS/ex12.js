function howManyDays() {
    const today = new Date().getDay();
    if (today === 6) {
        return 6;
    } else {
        return Math.abs(today - 5);
    }
}
console.log(howManyDays());