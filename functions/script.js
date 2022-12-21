function findAge(birthYear){
     return new Date().getFullYear() - birthYear
}
console.log(findAge(1998))
let ageEda = findAge(2002)
function emeklilik(birthYear, name){
    let age = findAge(birthYear)
    let lastyear = 65 - age
    if (lastyear > 0){
        console.log(`Hi  ${name},  you will be retirement after  ${lastyear} year`)
    } else{ console.log("you've already been retirement")}
    
}
console.log(emeklilik(1995,"eda"))

