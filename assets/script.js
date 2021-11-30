const startButton = document.getElementById('start-button');
startButton.addEventListener('click', buildField);
const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', reset)

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

    //Se dif médio
        //5 discos
        
    //Se dif difícil
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
    const destinyTower = event.currentTarget;
    if (discMoving === true && checkMove(destinyTower)=== true) {
        
        destinyTower.appendChild(selectedDisc);
        selectedDisc.style.border = 'none';
        discMoving = false;
    }
    checkWin();
} 

//função para checar o movimento
/* TO DO */
/* Quando o usuário clicar em um disco para move-lo deve-se checar 
*se o movimento que ele designou é permitido(caso o ultimo filho da torre for maior: true)
*
*
*/

function checkMove(tower) {
    let existingDisc = tower.lastElementChild;
    if(existingDisc === null || selectedDisc.clientWidth < existingDisc.clientWidth){
        
        return true;
    };
    return false;
}

//função para checar a vitória
/* TO DO */
/*  A cada segundo click verificar se a torre3(div container) tem 4 discos(filhos)
* caso retorne true deve chamar a função da msg de vitória
*
*
*
*/


function checkWin() {
    if(torre3.childElementCount === 4) {
        winMessage();
    };
}
//função para msg de vitória
/* TO DO */
/*  Cria um popup de vitória
*
*
*/

function winMessage() {
    let fullContainer = document.getElementById("full-container")
    let messageContainer = document.createElement("div")
    let message = document.createElement("h2")

    message.innerText = "Parabéns! Você venceu!"
    messageContainer.setAttribute("id","messageContainer")
    messageContainer.appendChild(message)
    fullContainer.appendChild(messageContainer)
    setTimeout(function(){
        messageContainer.removeAttribute("id")
        messageContainer.classList.add("messageContainer")
    }, 3000)
}


//função para resetar o game
/* TO DO */
/*  Deve retornar para a página de escolha de dificuldade? 
* innerHTML = '' / chama funções criadoras?
*
*
*
*/

function reset(){
    campo.innerHTML = ''
    
    buildField()
}