// let toplam = 0
// for(let i = 0 ; i <10;  i++){
//     toplam += i

// }
// console.log(toplam)


let numbers = [1, 4, 5, 8]
let toplam1 = 0
for(let i = 0; i < numbers.length; i++){
    toplam1 += numbers[i]
 
}   console.log(toplam1)

let numbers2 = [5, 15, 25, 35, 59, 789]
let toplam2 = 0
for(let i in numbers2){
toplam2 += numbers2[i]}

console.log(toplam2)

let numbers3 = [5, 15, 25, 35, 59]
let toplam3 = 0
for(let index of numbers3){
    toplam3 += index
}

console.log(toplam3)

let user = {
    "name" : "eda",
    "surname" : "inal"
}
for(let i in user){
    console.log(user[i])
}