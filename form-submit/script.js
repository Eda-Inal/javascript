// let formDom = document.querySelector('#form')



// form.addEventListener("submit", function(e){
//     e.preventDefault()
//     console.log("bastınz")
//     let score = document.querySelector('#score').value 
//   document.getElementById("h2").innerHTML = score
//     localStorage.setItem("score", score)
// })

let userFormDOM = document.querySelector('#userForm');
userFormDOM.addEventListener('submit', formHandler);

function formHandler(e){
    e.preventDefault();
    const USER_NAME = document.querySelector('#username');
    const SCORE = document.querySelector('#score');
    addItem(USER_NAME.value, score.value)

}
let userListDOM = document.getElementById('userList')
const addItem = (username, score) => {
    let liDOM = document.createElement('li');
    liDOM.innerHTML = `${username} <span class="badge bg-primary rounded-pill">${score} </span>`;
    liDOM.classList.add('list-group-item', 'd-flex', 'justify-content-between','align-items-start');
    userListDOM.append(liDOM)


}