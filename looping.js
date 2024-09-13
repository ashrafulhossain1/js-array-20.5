// LOOPING TECHNIQUE
/* 
1. FOR loop
2. while loop
3.do while
4. for of {array loop}
5. for in {object loop}
*/

const friends = ['elon', 'bill', 'mark', 'waren'];
// for of
// for(const friend of friends){
//     console.log(friend);
// }


//basic for
// for (let i = 0; i < friends.length; i++) {
//     console.log(i);
//     console.log(friends[i])
// }

const numbers = [2, 5, 5, 4, 5, 7, 4, 56, 5, 4, 55, 54, 545, 5, 4];

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }


let i = 0;
while (i < friends.length){
    console.log(friends[i])
    i++;
}

let n=0;
while(n<numbers.length){
    console.log(numbers[n])
    n++
}