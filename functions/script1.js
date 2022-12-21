function word(name, adet){
    for(let i= 0 ; i < adet; i++){
        console.log(name)
    }
}
word("eda" ,6)

function sayi(){
    let x = Math.random().toFixed(2)
    if(x > 0.5){
        console.log(`sayı değeri ${x} ve sayı yazıdır`)
    } else{
        console.log(`sayı değeri ${x} ve sayı turadır`)
    }
    console.log(x)
}
sayi()
sayi()
sayi()

function area(a, b){
    return a*b

}
console.log(area(3,5))

let x = 10
for(let i = 0; i < x; i++){
    if(10 % i == 0){
        console.log(i)
    }
}
function number(sayi){
     let numbers = []
for(let i = 2; i < sayi; i++){

   
    if(sayi % i == 0)
    numbers.push(i)
    
}
return numbers

}
console.log(number(8))