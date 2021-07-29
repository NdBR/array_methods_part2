// // A

const superheroes = [
    { name: "Batman", alter_ego: "Bruce Wayne" },
    { name: "Superman", alter_ego: "Clark Kent" },
    { name: "Spiderman", alter_ego: "Peter Parker" }]

// // Hier komt jouw functie
const findSpiderMan = function (array) {
    return array.find((item) => { return item.name === "Spiderman" })
}
console.log(findSpiderMan(superheroes))
// // Find Spiderman
// // result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

// // B
const doubleArrayValues = function (array) {
    return array.map((item) => { return item * 2 })
}
console.log(doubleArrayValues([1, 2, 3]))
// // result should be [2, 4, 6]
// // alternatief 
const arrayValue = [1, 2, 3];
const mapArray = arrayValue.map(x => x * 2);
console.log(mapArray);
// // C
const containsNumberBiggerThan10 = function (array) {
    return array.some((item) => { return item > 10 })
}
console.log(containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]))
// // result should be true
console.log(containsNumberBiggerThan10([1, 2, 1, 2, 1, 2]))
// // result should be false

// D
const isItalyInTheGreat7 = function (array) {
    return array.includes('Italy')
}
const isItalyInTheGreat71 = function (array) {
    return array.some((item) => { return item === 'Italy' })
}
console.log(isItalyInTheGreat7(['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States']))
console.log(isItalyInTheGreat71(['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States']))
// // result should be true

// E
const tenfold = function (array) {
    let newArray = [];
    array.forEach(number => {
        newArray.push(number * 10);
    });
    return newArray;
};
console.log(tenfold([1, 4, 3, 6, 9, 7, 11]))
// result should be [10, 40, 30, 60, 90, 70, 110]

// F
const isBelow100 = function (integers) {
    return integers.every((integer) => integer < 100)
}

console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 101, 7, 28, 11, 77, 84, 98]))
// result should be: false
// G

const bigSum = function (array) {
    return array.reduce((currentTotal, item) => {
        return item + currentTotal
    }, 0)
}
console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))
// result should be 1118


