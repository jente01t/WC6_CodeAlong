//console.log('script loaded');


let kop1 = document.getElementById('kop1');
kop1.textContent = "Nieuwe inhoud uit javascript"

let pees = document.getElementsByTagName('p');

let p1 = pees[0];

p1.innerHTML = "<strong>WOW</strong> HTML uit javascript";
p1.style.border = "3px solid pink";
p1.style.backgroundColor = "yellow"
// if (pees !== null) {
//     for (let i = 0; i < pees.length; i++) {
//         console.log(pees[i]);
//     }
// }

// let vbn = document.getElementsByClassName('voorbeeld');

let intro = document.querySelector('.intro');

let vbn = document.querySelectorAll('.intro .voorbeeld:first-of-type')

//console.log(vbn);