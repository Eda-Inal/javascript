let numbers = [2, 5, 7, 15, 3, 25]

for(let i = 0; i <numbers.length; i++){
    let product = 1
    product *= numbers[i] * numbers[i]
    console.log(product)
}

for(let index of numbers){
    let product = 1
    product *= index * index
    console.log(product)

}
for(let index in numbers){
        let product = 1
        product *= numbers[index] * numbers[index] 
        console.log(product)
    
    }

 let total = 0
for(let i of numbers){
   
    if(i % 2 == 0){
      total += i
       console.log(total)
    }
   

}

for(let i of numbers){
    if( i % 5 == 0 ){
        console.log(i)

    }
}
let products = ["iphone12", "samsung s22", "iphone 13", "samsung s23", "samsung 26"]

for(let i in products){

    let x = products[i].toUpperCase()
console.log(x)
}
 let adet = 0 
for(let i in products){
  
    if(products[i].includes("samsung")){
       adet++
     
    } 
} console.log(adet)

let students = [
    {"name" : "eda", "marks" : [10, 10, 10]},
    {"name" : "ezgi", "marks" : [50, 50, 50]}
]

for(let index in students){
    let top = 0
    for(let i of students[index].marks ){
        top += i
       top1 = top /3
       
       }if(top1 < 40){
        console.log("geçtiniz") }
        else{
            console.log("kaldınız")
        }
       

console.log(top1)

    

}