//ES5
// function selamlama(){
//     console.log("merhaba")
// }
// selamlama()

// var selamlamaES5 = function(isim){
//     console.log("merhaba " + isim)
// }

// selamlamaES5("Eda")

// //ES6 
// selamlamaES6 = (isim) => console.log("merhaba " +isim );
// selamlamaES6("Ali");

//ES5
// function toplam(a,b){
//     return a + b;

// }
// let sonuc = toplam(2,3)
// console.log()

//ES6
// toplam = (a,b) => a+b ;
// let x = toplam(3,4)
// console.log(x)

// toplam = (a,b) => {return a+b };
// let y= toplam(3,50)
// console.log(y)

const sayilar = [1,5,7,3,2,67]

const teksayilar = sayilar.filter((sayi) => sayi % 2 == 1)
//const teksayilar = sayilar.map((sayi) => sayi % 2 == 1)
console.log(teksayilar)
const urunler = [
    {urunAdi : "Iphone11" , fiyat : 12000},
    {urunAdi : "Iphone12" , fiyat : 15000},
    {urunAdi : "Iphone13" , fiyat : 17000}
]
// const sonuc = urunler.map(urun => urun.urunAdi);
const sonuc = urunler.filter(urun => urun.fiyat > 14000).map(urun => urun.urunAdi);
console.log(sonuc)
