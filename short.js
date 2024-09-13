const persons = ['shakib', 'nakib', 'akib', 'rakib', 'dakib'];
const shortedPerson = persons.sort();
// console.log(shortedPerson);

// sort --> 
// ascending --> smaller to larger; 2.3,4,6,7,8
// descending -->larger to smaller: 8,7,6,4,3,2
// const numbers = [4,7,12,8,43,6,1];
// const numbers_asc= [...numbers].sort(function(a,b) {return a - b})
// const numbers_dsc= [...numbers].sort(function(a,b) {return b - a})
// console.log(numbers_asc)
// console.log(numbers_dsc)

//  recap
// const numbers = [4,7,2,8,3,6];
// const numbers_asc = numbers.sort();
// console.log(numbers_asc);



const numbers = [4, 7, 12, 8, 3, 55, 6];
const numbers_asc = [...numbers].sort(function (a, b) { return a - b })
const numbers_dsc = [...numbers].sort(function (a, b) { return b - a })

console.log(numbers_asc);
console.log(numbers_dsc);


