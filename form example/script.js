const form = document.querySelector('#form')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const repassword = document.querySelector('#repassword')

function success(input){
    input.className = 'form-control is-valid' 

}

function error(input, message){
input.className = 'form-control is-invalid'
const div = input.nextElementSibling;
div.innerText = message;
div.className = 'invalid-feedback'

};



 function checkRequired(inputs){
inputs.forEach(function(input){
   if(input.value === ''){
    error(input, `${input.id} is required`)
   } else{
    success(input)
   }
})

  
  }
function checkLenght(input, min, max){
  if(input.value.length < min){
    error(input, `${input.id} en az ${min} karakter olmalidir`)
  }
  else if(input.value.length > max){
    error(input, `${input.id} en fazla ${max} karakter olmalidir`)
}
else{
  success(input)
}
}
function checkPasswords(input1, input2){
  if(input1.value !== input2.value){
    error(input2, 'parolalar eşleşmiyor')
  }
}

form.addEventListener('submit' , function(e){

    e.preventDefault();

    checkRequired([username, email, password, repassword]);

  checkLenght(username, 7, 15)
  checkLenght(password, 7, 15)
  checkLenght(repassword, 7, 15)
  checkPasswords(password, repassword)
  
  })














// form.addEventListener('submit', function(e){
//     e.preventDefault();
//   if(username.value == ''){
//     error(username, 'username gerekli')
//   } else{
//    success(username) 
//   }

//   if(email.value == ''){
//     error(email, 'email gerekli')
//   }   
//     else if(!validateEmail(email.value)){
//         error(email, 'düzgün bir mail giriniz')
//     }
//     else{
//     success(email)}
    

//   if(password.value == ''){
//     error(password, 'password gerekli')
//   }  else{
//     success(password)}

//   if(repassword.value == ''){
//     error(repassword, 'repassword gerekli')
//   }  else{
//     success(repassword)}
  



// 
