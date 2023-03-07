////randomizer for PC choice
function randomer(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
        }
    ///listener for fox choice
function gameStart(){
    let foxButtonPlayer = document.getElementById('fox-button')
    foxButtonPlayer.addEventListener('click', foxChoosePlayer)

    let firebutton = document.getElementById('fire-button')
    firebutton.addEventListener('click',fireMove)
    let aquabutton = document.getElementById('aqua-button')
    aquabutton.addEventListener('click',aquaMove)
    let leafbutton=  document.getElementById('leaf-button')
    leafbutton.addEventListener('click',leafMove)
}
/////function to choose fox to play
function foxChoosePlayer(){
    let inputEmberfox= document.getElementById('emberfox')
    let inputAquafox= document.getElementById('aquafox')
    let inputLeafox= document.getElementById('leafox')
    let spanplayerFox = document.getElementById('playerFox')

    if (inputEmberfox.checked){
        spanplayerFox.innerHTML='Emberfox'
    }
        else if(inputAquafox.checked){
        spanplayerFox.innerHTML='Aquafox'
    }
        else if(inputLeafox.checked){
        spanplayerFox.innerHTML='Leafox'
    }
        else {
            alert('Make a valid choice.')
}
        foxChoosePc()
}
function foxChoosePc(){
    let randomMove= randomer(1,3)
    let spanpcFox= document.getElementById('pcFox')
    if (randomMove==1){
        spanpcFox.innerHTML='Emberfox'
    }
        else if(randomMove==2){
            spanpcFox.innerHTML='Aquafox'
    }
        else if(randomMove==3){
            spanpcFox.innerHTML='Leafox'
    }
        else {alert ('system error')
}

}

function fireMove(){
playerMove="Fire Heart ❤️‍🔥"
pcRandomMove()
}
function aquaMove(){
playerMove="Strong Wave 🌊"
pcRandomMove()
}
function leafMove(){
playerMove="Stinky Leaf 🥬"
pcRandomMove()
}

function pcRandomMove(){
    let pcRandomMove =randomer(1,3)
    if(pcRandomMove==1){
        pcMove='Fire Heart ❤️‍🔥'
    }
    else if(pcRandomMove){
        pcMove='Strong Wave 🌊'
    }
    else if(pcRandomMove){
        pcMove="Stinky leaf 🥬"
    }
    else alert('system error')
createMessage()
}


function createMessage(){
let sectionMessages= document.getElementById('messages')
 let paragraph = document.createElement('p')
 paragraph.innerHTML='Your fox used ' + playerMove + "! PC'S fox used " + pcMove + "! pending"

 sectionMessages.appendChild(paragraph)
}
///script starts with fully loaded page
window.addEventListener('load',gameStart)