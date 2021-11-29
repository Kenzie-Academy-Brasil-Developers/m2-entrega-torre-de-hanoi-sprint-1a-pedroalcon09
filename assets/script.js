const startButton = document.getElementById('start-button');
startButton.addEventListener('click', buildField);

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
disco1.setAttribute('id', 'disc-1');
const disco2 = document.createElement('span');
disco2.setAttribute('id', 'disc-2');
const disco3 = document.createElement('span');
disco3.setAttribute('id', 'disc-3');
const disco4 = document.createElement('span');
disco4.setAttribute('id', 'disc-4');
const disco5 = document.createElement('span');
disco5.setAttribute('id', 'disc-5');
const disco6 = document.createElement('span');
disco6.setAttribute('id', 'disc-6');
    
//Variavel pra saber se ativa selectDisc ou moveDisc
let discMoving = false;
let selectedDisc = null;

function buildField() {
    
    //A selecao de dificuldade vai entrar em condicionais nessa funcao
    //Se dif facil
        //4 discos
    torre1.appendChild(disco1);
    torre1.appendChild(disco2);
    torre1.appendChild(disco3);
    torre1.appendChild(disco4);

    campo.appendChild(torre1);
    campo.appendChild(torre2);
    campo.appendChild(torre3);

    //Se dif facil
        //5 discos
        
    //Se dif facil
        //6 discos
}

function selectDisc(event) {
    if (discMoving === false) {
        selectedDisc = event.currentTarget.lastElementChild;
        selectedDisc.style.border = '2px solid white';
        discMoving = true;
    }
}

function moveDisc(event) {
    if (discMoving === true && (checkMove())=== true) {
        const destinyTower = event.target;
        destinyTower.appendChild(selectedDisc);
        selectedDisc.style.border = 'none';
        discMoving = false;
    }
}
 
