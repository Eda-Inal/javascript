let counter = localStorage.getItem('counter') ? localStorage.getItem('counter') : 0;
let countDOM = document.querySelector('.count');

let increaseDOM = document.querySelector('#increase');
let decreaseDOM = document.querySelector('#decrease');
countDOM.innerHTML = counter ;

increaseDOM.addEventListener("click", clickEvent);
decreaseDOM.addEventListener("click", clickEvent);
function clickEvent(){
    console.log(this.id)
    this.id == "increase" ? countDOM.innerHTML = counter+=1 : countDOM.innerHTML = counter -= 1;
    localStorage.setItem("counter",counter)


}

