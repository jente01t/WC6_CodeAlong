
let btns = document.getElementsByClassName('btn');

if (btns.length >= 1) {
    for (let i = 0; i < btns.length; i++) {
        let kleur = btns[i].getAttribute('value');
        btns[i].style.backgroundColor = kleur;

        btns[i].addEventListener('click', function() {
            document.body.style.backgroundColor = kleur;
        })
    }
}