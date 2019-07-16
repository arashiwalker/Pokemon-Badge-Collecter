
var collectedBadges = 0
var neededBadges = 0

var Wins = 0
var Losses = 0

var boulderB
var cascadeB
var thunderB
var rainbowB
var soulB
var marshB
var volcanoB
var earthB
var pikachu

function playAudio() {
    var audio = new Audio('../unit-4-game/assets/sounds/badgeSound.mp3')
    audio.play()
}

function playAudio2() {
    var pika = new Audio('../unit-4-game/assets/sounds/Pikaaaa.mp3')
    pika.play()
}

function beginGame(){
    winningNum() 
    BadgeValue()
    neededBadges = winningNum()
    $("#neededBadges").text("Badges Needed: " + neededBadges)
    $("#Wins").text("Wins: " + Wins)
    $("#Losses").text("Losses: " + Losses)
    totalBadges()
}

function winningNum(){
    var randomNum = Math.floor(Math.random()*102) +19
    return(randomNum) 
}

function BadgeNum(){
    var randomNum = Math.floor(Math.random()*13)
    return(randomNum) 
}   

function BadgeValue(){
    boulderB = BadgeNum()
    cascadeB = BadgeNum()
    thunderB = BadgeNum()
    rainbowB = BadgeNum()
    soulB = BadgeNum()
    marshB = BadgeNum()
    volcanoB = BadgeNum()
    earthB = BadgeNum()
}

function totalBadges(){
    $("#collectedBadges").text("Badges collected: " + collectedBadges)
}

function checkingScore(){
    if (collectedBadges == neededBadges) {
        Wins = Wins + 1
        $("#Wins").text("Wins: " + Wins)
        playAudio()
        resetGame()
        beginGame()
    }
    if (collectedBadges > neededBadges){
        Losses = Losses + 1
        $("#Losses").text("Losses: " + Losses)
        playAudio3()
        resetGame()
        beginGame()
    }
}

function resetGame(){
    collectedBadges = 0 
    neededBadges = 0
}


$("#boulderB").on("click",function(){
    collectedBadges = collectedBadges + boulderB
    totalBadges()
    checkingScore()
})

$("#cascadeB").on("click",function(){
    collectedBadges = collectedBadges + cascadeB
    totalBadges()
    checkingScore()
})

$("#thunderB").on("click",function(){
    collectedBadges = collectedBadges + thunderB
    totalBadges()
    checkingScore()
})

$("#rainbowB").on("click",function(){
    collectedBadges = collectedBadges + rainbowB
    totalBadges()
    checkingScore()
})

$("#soulB").on("click",function(){
    collectedBadges = collectedBadges + soulB
    totalBadges()
    checkingScore()
})

$("#marshB").on("click",function(){
    collectedBadges = collectedBadges + marshB
    totalBadges()
    checkingScore()
})

$("#volcanoB").on("click",function(){
    collectedBadges = collectedBadges + volcanoB
    totalBadges()
    checkingScore()
})

$("#earthB").on("click",function(){
    collectedBadges = collectedBadges + earthB
    totalBadges()
    checkingScore()
})

$("#pikachu").on("click",function(){
    collectedBadges = 0
    totalBadges()
    playAudio2()
})

beginGame()

