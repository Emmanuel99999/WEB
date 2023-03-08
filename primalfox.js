///// function called by listener of button

////randomizer for PC choice
function randomer(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
        }

        ///function for choices of pc and player
function election(fox){
    let result = ""
    if(fox ==1){
            result=(" Emberfox 🔥")
    }
        else if(fox ==2){
            result=(" Aquafox 💧")
    }
        else if(fox==3){
            result=(" Leafox 🌵")
    }
        else{
            result=("Please enter a valid option")
    }
    return result
}
    //foxof choice
    let player = 0
    let pc = randomer(1,3)
    ///times won or lost
    let won= 0
    let lost=0

    ///// cicle to end game after 3 won or lost matchs
    while (won < 3 && lost < 3){
    pc= randomer(1,3)

    ////here we asks the player what fox does he want
    player = prompt("choose your fox 1 for Emberfox, 2 for Aquafox and 3 for  Leafox.")
    alert("PC chooses: "+ election (pc))
    alert("You choosed: "+ election (player))
     ///COMBAT
    if(pc==player){
        alert("It's a tie")
    }
    else if(player==1 && pc==3){
        alert("You win!, fire is strong against plant!")
        won= won+1
    }
    else if(player==2 && pc==1){
        alert("You win!, water is strong against fire!")
        won= won+1
    }
    else if(player==3 && pc==2){
        alert("You win!, Plant is strong agains water")
        won= won+1
    }
    else{
        alert("you lose 😿")
        lost= lost+1

    }
}
////cicle ends and gives simple statistics
alert ("You won " + won + " times. you lost " + lost+ " times" )