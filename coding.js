/* function countup(n) {
    if (n < 1) {
    return [];
    } else {
        const countArray = countup(n - 1);
        countArray.push(n);
        return countArray;
    }
}
console.log(countup(5)); */



function countdown(n) {
    if (n < 1) return [];
    
    return [n].concat(countdown(n - 1))
}
console.log(countdown(5));