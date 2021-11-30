const startButton = document.getElementById('start-button');
startButton.addEventListener('click', buildField);
const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', reset)

const campo = document.getElementById('towers-container');

const botaoFacil = document.getElementById('facil');
botaoFacil.addEventListener('click', easy);
const botaoMedio = document.getElementById('medio');
botaoMedio.addEventListener('click', medium);
const botaoDificil = document.getElementById('dificil');
botaoDificil.addEventListener('click', hard);

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
//variavel para acessar disco selecionado
let selectedDisc;
//variavel para dizer o tanto de discos que tem na dificuldade escolhida
let discAmount = 4;

function buildField() {
            //A selecao de dificuldade vai entrar em condicionais nessa funcao
        //Se dif facil
            //4 discos
        if (discAmount === 4) {
            torre1.appendChild(disco1);
            torre1.appendChild(disco2);
            torre1.appendChild(disco3);
            torre1.appendChild(disco4);

            campo.appendChild(torre1);
            campo.appendChild(torre2);
            campo.appendChild(torre3);
        }
        //Se dif difícil
            //5 discos
        else if (discAmount === 5) {
            torre1.appendChild(disco1);
            torre1.appendChild(disco2);
            torre1.appendChild(disco3);
            torre1.appendChild(disco4);
            torre1.appendChild(disco5);

            campo.appendChild(torre1);
            campo.appendChild(torre2);
            campo.appendChild(torre3);
        }   
        //Se dif médio
            //6 discos
        else if (discAmount === 6) {
            torre1.appendChild(disco1);
            torre1.appendChild(disco2);
            torre1.appendChild(disco3);
            torre1.appendChild(disco4);
            torre1.appendChild(disco5);
            torre1.appendChild(disco6);

            campo.appendChild(torre1);
            campo.appendChild(torre2);
            campo.appendChild(torre3);
        }     
}

function selectDisc(event) {
    
    if (discMoving === false) {
        selectedDisc = event.currentTarget.lastElementChild;
        selectedDisc.style.border = '2px solid white';
        console.log(selectedDisc)
        discMoving = true;
    }
}

function moveDisc(event) {
    const destinyTower = event.currentTarget;
    if (discMoving === true && (checkMove(destinyTower)) === true) {
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
    }
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
const checkWin = () => {
    if(torre3.childElementCount === discAmount) {
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
    
    difficultyMaker()
}
function easy() {discAmount = 4;

}
function medium() {discAmount = 5;

}
function hard() {discAmount = 6;

}


//função para criar botoes de dificuldade
function difficultyMaker(){
    let difContainer = document.createElement("div")
    let easyButton = document.createElement("button")
    let mediumButton = document.createElement("button")
    let hardButton = document.createElement("button")

    difContainer.setAttribute('id', 'difficulty-buttons')
    easyButton.setAttribute('id', 'facil')
    mediumButton.setAttribute('id', 'medio')
    hardButton.setAttribute('id', 'dificil')
    easyButton.innerText = "Fácil"
    mediumButton.innerText = "Médio"
    hardButton.innerText = "Difícil"

    difContainer.appendChild(easyButton)
    difContainer.appendChild(mediumButton)
    difContainer.appendChild(hardButton)
    campo.appendChild(difContainer)

    discAmount = 4
}
