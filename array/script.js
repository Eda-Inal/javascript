let colors = ["pink", "blue", "black", "white", "gold"]
console.log(colors[3])
let x = "learning software 101"
console.log(x.split(" ")[2])
console.log(typeof colors)

let students = ["emma", "rachel", "chandler"]

let sonuc = students.push("eda")
console.log(students)

let y = colors.concat(students)
console.log(y)

let m = colors.splice(0,2)
console.log(m)

let fruits = ["apple", "pear", "banana", "strawberry"]
console.log(fruits[(fruits.length)- 1])
console.log(fruits[0])
console.log(fruits.includes("apple"))
let addNewItem = fruits.push("cherry")
let removeItem = fruits.splice(fruits.length - 2, 2)
console.log(fruits)

let students = [
    [
    "yiğit",
     2002,
    [70,60, 80]
],
    [
        "ada",
        2010,
        [50, 50, 40]
    ]
]


let d = new Date()
let time = d.getFullYear()
console.log(time - students[0][1])
console.log(time - students[1][1])
let x = students[0][2][0] + students[0][2][1] + students[0][2][2] / 3

console.log(x.toFixed(1))