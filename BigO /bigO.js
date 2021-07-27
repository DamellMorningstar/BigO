// const addUpTo = n => {
//     let total = 0;
//     for (let i = 0; i <= n; ++i){
//         total += i;
//     }
//     return total;
// }

const addUpTo = n => {
    return n * (n + 1) / 2;
}

console.log(addUpTo(9))
console.log(addUpTo(89))