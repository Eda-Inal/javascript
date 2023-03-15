let inputDOM = document.getElementById('input');
let ulDOM = document.getElementById('ul');
let btnDOM = document.getElementById('buton')
let clearALL =document.getElementById('clear')

btnDOM.addEventListener('click', addNewItem);
function addNewItem(){

  let liDOM = document.createElement('li')
  liDOM.classList.add('text-danger')
    liDOM.innerHTML = inputDOM.value 
     ulDOM.appendChild(liDOM)
  

}
