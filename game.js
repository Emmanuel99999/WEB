let pointsPc= 3
let pointsPlayer= 3
////randomizer for PC choice
function randomer(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
        }
    ///listener for fox choice
function gameStart(){
    let sectionmoveChoose=document.getElementById('move-choose')
    sectionmoveChoose.style.display='none'
    let sectionrestart=document.getElementById('restart')
    sectionrestart.style.display='none'
    let foxButtonPlayer = document.getElementById('fox-button')
    foxButtonPlayer.addEventListener('click', foxChoosePlayer)
    let firebutton = document.getElementById('fire-button')
    firebutton.addEventListener('click',fireMove)
    let aquabutton = document.getElementById('aqua-button')
    aquabutton.addEventListener('click',aquaMove)
    let leafbutton=  document.getElementById('leaf-button')
    leafbutton.addEventListener('click',leafMove)
    let restartbutton= document.getElementById('restart-button')
    restartbutton.addEventListener('click', restartGame)
}
/////function to choose fox to play (even though foxes have element theme it doesn't affect the result)
function foxChoosePlayer(){
    let sectionfoxChoose=document.getElementById('fox-choose')
    sectionfoxChoose.style.display='none'
    let sectionmoveChoose=document.getElementById('move-choose')
    sectionmoveChoose.style.display='block'
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
////pc chooses fox randomly
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
///player chooses moves from buttons
function fireMove(){
playerMove="Fire Heart ❤️‍🔥"
pcRandomMove()
}
function aquaMove(){
playerMove="Strong Wave 🌊"
pcRandomMove()
} 
function leafMove(){
playerMove="Stinky leaf 🥬"
pcRandomMove()
}
/////pc chooses move randomly
function pcRandomMove(){
    let pcRandomMove =randomer(1,3)
    if(pcRandomMove==1){
        pcMove='Fire Heart ❤️‍🔥'
    }
    else if(pcRandomMove==2){
        pcMove='Strong Wave 🌊'
    }
    else if(pcRandomMove==3){
        pcMove="Stinky leaf 🥬"
    }
    else alert('system error')

/////match function to choose winner, fire beats leaf, water beats fire and leaf beats water.
match()
}
function match(){

    let spanpointsPc =document.getElementById('pointsPc')
    let spanpointsPlayer= document.getElementById('pointsPlayer')
    if(playerMove==pcMove){
        createMessage("It's a tie!")
    }
        else if(playerMove=="Fire Heart ❤️‍🔥" && pcMove=="Stinky leaf 🥬"){
            createMessage("you win, PC loses 1 point")
            spanpointsPc.innerHTML= pointsPc           
            pointsPc--
    }
        else if(playerMove=="Strong Wave 🌊" && pcMove=="Fire Heart ❤️‍🔥" ){
            createMessage("you win, PC loses 1 point")
            spanpointsPc.innerHTML= pointsPc
            pointsPc--          
        }
        else if(playerMove=="Stinky leaf 🥬"&& pcMove=="Strong Wave 🌊"){
            createMessage("you win, PC loses 1 point")
            spanpointsPc.innerHTML= pointsPc          
            pointsPc--
        }
        else { 
            createMessage("you lose 1 point")
            spanpointsPlayer.innerHTML=pointsPlayer
            pointsPlayer--            
    }
   pointsCheck()
 }

function pointsCheck(){
    if(pointsPc<=0){
        finalMessage("You won! 🏆")
    }
    else if(pointsPlayer<=0){
        finalMessage("You lose, keep trying 😊")
    }
}

////function to create match message
function createMessage(result){
let sectionMessages= document.getElementById('messages')
let paragraph = document.createElement('p')
paragraph.innerHTML='Your fox used ' + playerMove + "! PC'S fox used " + pcMove + "! " + result

 sectionMessages.appendChild(paragraph)
}

function finalMessage(finalResult){
    let sectionmoveChoose=document.getElementById('restart')
    sectionmoveChoose.style.display='block'
    let sectionMessages= document.getElementById('messages')
    let paragraph = document.createElement('p')
    paragraph.innerHTML= finalResult
    
     sectionMessages.appendChild(paragraph)
     let firebutton = document.getElementById('fire-button')
     firebutton.disabled=true
     let aquabutton = document.getElementById('aqua-button')
     aquabutton.disabled=true
     let leafbutton=  document.getElementById('leaf-button')
     leafbutton.disabled=true
}

function restartGame(){
    location.reload()
}
///script starts with fully loaded page
window.addEventListener('load',gameStart)