// console.log('script loaded');


function elementCreateIn (container) {

    let p = document.createElement('p');

    let txt = document.createTextNode('Paragraaftekst uit javascript');

    p.appendChild(txt);

    let cont = document.getElementById(container);
    cont.appendChild(p);

}

let btn = document.getElementById('btn1');
console.log(btn)


btn.addEventListener('click', function() {
        elementCreateIn('content');
});

//elementCreateIn('content');


let p1 = document.getElementsByClassName('voorbeeld')[0];

//selecteer parentnode van te verwijderen element
let parent = p1.parentNode;
parent.removeChild(p1);


//console.log(p1);