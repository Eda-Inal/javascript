let soru = {
    soruMetni : "Hangisi javascript paket yönetimine uygulamasıdır?",
    cevapSecenekleri : {
        a: "Node js",
        b: "Typescript",
        c : "Npm"
    },
    dogruCevap : "c",
    cevabiKontrolEt : function(cevap){
        return cevap === this.dogruCevap
    }

}
// let soru2 = {
//     soruMetni : "Hanfisi .net paket yönetimine uygulamasıdır?",
//     cevapSecenekleri : {
//         a: "Node js",
//         b: "Nuget",
//         c : "Npm"
//     },
//     dogruCevap : "b",
//     cevabiKontrolEt : function(cevap){
//         return cevap === this.dogruCevap
//     }

// }

function Soru(soruMetni, cevapSecenekleri, dogruCevap){
this.soruMetni = soruMetni;
this.cevapSecenekleri = cevapSecenekleri;
this.dogruCevap = dogruCevap;
this.cevabiKontrolEt = function(cevap){
    return cevap === this.dogruCevap
}

}


// let soru1 = new Soru("Hangisi javascript paket yönetimine uygulamasıdır?",  {a: "Node js",b: "Typescript",c : "Npm"}, "c"
// )

let sorular = [
    new Soru("1-Hangisi javascript paket yönetimine uygulamasıdır?",  {a: "Node js",b: "Typescript",c : "Npm"}, "c"

    ),
    new Soru("2-Hangisi javascript paket yönetimine uygulamasıdır?",  {a: "Node js",b: "Typescript",c : "Npm"}, "c"
),
new Soru("3-Hangisi javascript paket yönetimine uygulamasıdır?",  {a: "Node js",b: "Typescript",c : "Npm"}, "c"
)

]
function Quiz(sorular){
    this.sorular = sorular;
    this.soruIndex = 0;
}
Quiz.prototype.soruGetir = function(){
    return this.sorular[this.soruIndex];
}

const quiz = new Quiz(sorular);


document.querySelector(".btn_start").addEventListener('click', function(){
    document.querySelector('.quiz_box').classList.add('active')
    soruGoster(quiz.soruGetir());
}) 

document.querySelector('.next_btn').addEventListener('click',function(){
    if(quiz.sorular.length != quiz.soruIndex + 1){
      
         quiz.soruIndex +=1;
          soruGoster(quiz.soruGetir())
  
      }  else{
        console.log("quiz bitti")
      }
} )


function soruGoster(soru){
let question  = `
<span>${soru.soruMetni} </span>
`;
let options = '';

for(let cevap in soru.cevapSecenekleri){
    options +=
 `  <div class = "option">
    <span> <b> ${cevap}</b>: ${soru.cevapSecenekleri[cevap]}</span>
   </div>`;
}


const option_list = document.querySelector(".option_list")
document.querySelector(".question_text").
innerHTML= question;
option_list.innerHTML = options;
const option = option_list.querySelectorAll(".option");

for(let opt of option){
    
    opt.setAttribute("onclick", "optionSelected(this)")
}
}
function optionSelected(option){
    let cevap = option.querySelector("span b").textContent;
 
}


