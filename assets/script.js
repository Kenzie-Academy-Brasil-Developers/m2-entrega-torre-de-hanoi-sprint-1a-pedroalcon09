const campo = document.getElementById('towers-container');

const torre1 = document.createElement('div');
torre1.setAttribute('id', 'tower-1');
torre1.addEventListener('click', selectDisc);
torre1.addEventListener('click', moveDisc);

const torre2 = document.createElement('div');
torre2.setAttribute('id', 'tower-2');
torre2.addEventListener('click', selectDisc);
torre2.addEventListener('click', moveDisc);

const torre3 = document.createElement('div');
torre3.setAttribute('id', 'tower-3');
torre3.addEventListener('click', selectDisc);
torre3.addEventListener('click', moveDisc);

const disco1 = document.createElement('span');
const disco2 = document.createElement('span');
const disco3 = document.createElement('span');
const disco4 = document.createElement('span');
    
//Variavel pra saber se ativa selectDisc ou moveDisc
let discMoving = false;

function buildField() {
    
    torre1.appendChild(disco1);
    torre1.appendChild(disco2);
    torre1.appendChild(disco3);
    torre1.appendChild(disco4);

    campo.appendChild(torre1);
    campo.appendChild(torre2);
    campo.appendChild(torre3);
}

