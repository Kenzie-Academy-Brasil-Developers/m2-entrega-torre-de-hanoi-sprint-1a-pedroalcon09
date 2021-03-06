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
let moveCounter = 0;

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
    let comparativePath = event.path[0]
    if (discMoving === false) {

        selectedDisc = event.currentTarget.lastElementChild;
        selectedDisc.style.border = '2px solid white';
        discMoving = true;
    }
    //compara os discos para que, caso sejam iguais, haja a des-seleção 
    else if(comparativePath === selectedDisc){
        disSelect()
    }
    
}

//função para des-selecionar o disco
function disSelect(){
    selectedDisc.style.border = 'none';
    discMoving = false;
    selectedDisc = null;
}

function moveDisc(event) {

    const destinyTower = event.currentTarget;
    //verifica se o disco foi selecionado e se o movimento é permitido
    if (discMoving === true && checkMove(destinyTower)) {
        
        destinyTower.appendChild(selectedDisc);
        selectedDisc.style.border = 'none';
        moveCounter++;
        document.getElementById('move-counter').innerText = moveCounter;
        discMoving = false;
    }
    //checa a vitória a cada segundo movimento
    checkWin();
} 

//função para checar o movimento

function checkMove(tower) {
    let existingDisc = tower.lastElementChild;
    //se a torre não tiver nenhum filho ou se o disco selecionado for menor do que o disco existente
    if(existingDisc === null || selectedDisc.clientWidth < existingDisc.clientWidth){

        return true;
    }

    return false;
}

//função para checar a vitória

function checkWin() {
    //se o numero de filhos da ultima torre for igual ao numero de discos do jogo exibe mensagem de vitoria
    if(torre3.childElementCount === 4) {
        winMessage();
    };
}
//função para msg de vitória

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

function reset(){

    campo.innerHTML = ''

    moveCounter = 0;
    document.getElementById('move-counter').innerText = moveCounter;
    disSelect()
    buildField()
}