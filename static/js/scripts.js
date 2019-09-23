/*MENU*/
let menu = document.querySelector('nav');
let mask = document.querySelector('.mask');
let link = document.querySelector('ul');


function openMenu() {
    menu.classList.add('active');
};

function closeMenu() {
    mask.addEventListener('click', () => {
        menu.classList.remove('active')
    });
    link.addEventListener('click', () => {
        menu.classList.remove('active')
    });
}
closeMenu();

window.onscroll = function () { 
    "use strict";
    if (window.innerWidth >= 900 && window.scrollY >= 400 ) {
        menu.classList.add("nav-colored");
        menu.classList.remove("nav-transparent");
    } 
    else {
        menu.classList.add("nav-transparent");
        menu.classList.remove("nav-colored");
    }
};

/*Galeria*/
let expand = document.querySelector('.expanded');

function onClickPhoto(img) {
    expand.classList.add('active');
    expand.getElementsByTagName("img")[0].src = './static/img/' + img + '.png';
}

function closePhoto() {
    expand.classList.remove('active');
    expand.getElementsByTagName("img")[0].src = '';
}

/*EMAIL*/
let sending = document.querySelector('.dogsending');

let name = document.querySelector('#name');
let email = document.querySelector('#email');
let phone = document.querySelector('#phone');
let message = document.querySelector('#message');

let erro = document.querySelector('#erro');

function sendEmail() {
    let mail = {
        name: name.value,
        email: email.value,
        phone: phone.value,
        message: message.value
    }

    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let phoneFormat = /([0-9]()-)\w+/g;

    if (!mail.name || !mail.email || !mail.phone || !mail.message ) {
        erro.className = 'alert';
        erro.innerHTML = 'Alguns campos se encontram em branco.';
    } else if (!email.value.match(mailFormat)) {
        erro.className = 'alert';
        erro.innerHTML = 'O e-mail apresentado é inválido.';
    } 
    /*else if (!phone.value.match(phoneFormat)) {
        erro.className = 'alert';
        erro.innerHTML = 'O telefone apresentado é inválido.';
    } */
    else {
        sending.classList.add('displayBox');
        erro.className = 'none';
        erro.innerHTML = '';

        setTimeout(() => {
            name.value = '';
            email.value = '';
            phone.value = '';
            message.value = '';
            erro.className = 'none';
            erro.innerHTML = '';
            sending.classList.remove('displayBox');
        }, 3000)
        
        /* NÃO ESTÁ ENVIANDO E-MAILS, SOMENTE EXIBE A ANIMAÇÃO
        let http = new XMLHttpRequest();
        http.onreadystatechange = () => {
            if (http.readyState == 4) {
                if (http.status === 200) {
                    name.value = '';
                    email.value = '';
                    phone.value = '';
                    message.value = '';
                    erro.className = 'none';
                    erro.innerHTML = '';
                    sending.classList.remove('displayBox');
                } else {
                    sending.classList.remove('displayBox');
                    erro.className = 'alert';
                    erro.innerHTML = 'Não foi possível enviar o e-mail.';
                }
            }
        };
        */
        http.open("POST", "/mail", true);
        http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        http.send(JSON.stringify(mail));
    }
}


/*MAPA*/
function startMap() {
    let coord = {lat: -29.1975886, lng: -49.2645282};
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: coord,
        disableDefaultUI: true,
        zoomControl: true,
        gestureHandling: 'none'
    });
 
    let marker = new google.maps.Marker({
        position: coord,
        map: map,
        title: 'Meu marcador'
    });
}
startMap();