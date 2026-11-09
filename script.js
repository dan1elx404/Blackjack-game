let cards = []
let sum = 0
let blackjack = false
let isAlive = false
let hasStarted = false
let message = ""

//player object
let player = {
    name:"D",
    chips: 150
}
let playerEl = document.getElementById("player")
playerEl.innerHTML = player.name +": $"+player.chips

//these are our rendering elements from our js file 
let cardsEl = document.getElementById("a1")
let sumEl = document.querySelector("#a2")
//same as the getElementById but more broad way of selecting

let messageEl = document.getElementById("message")

//This gives our cards random number everythime u click start or new
//following our blackjack rule if we get 1 it translates to 11 and if we get (11,12,13) it translates to 10 
function randomNumber(){
    let number = Math.floor(Math.random() * 13) + 1;
    console.log(number);

    if (number === 1){
        number = 11;
    } else if (number > 10 && number < 14){
        number = 10;
    }

    return number;
}


function startGame()
{     blackjack = false
      isAlive = true
      hasStarted = true
      cardsEl.innerText = "cards: "
      let firstNum = randomNumber()
      let secondNum = randomNumber()
      cards = [firstNum, secondNum]
      sum = cards[0] +cards[1]

      renderGame()         //calls the rendering funtion to update the cards and sum on our html
      checkGameStatus()    //calls checkGameStatus function to show the won n lost texts

}

function checkGameStatus() {

    if (sum === 21) {
        blackjack = true
        message = "U ve won!!"

    } else if (sum < 21) {
        blackjack = false
        message = "u want another card?"

    } else {
        isAlive = false
        blackjack = false
        message = "u lost!!"
    }

    messageEl.innerText = message
}

function newCard() {
    if (hasStarted && isAlive && !blackjack) {  //this blocks from clicking new card befor we start the game cause the hasStarted bool is false

        let card = randomNumber()
        sum = sum + card
        cards.push(card)

        renderGame()
        checkGameStatus()
    }
}

function renderGame() {

    cardsEl.innerText = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardsEl.innerText += cards[i] + ", "
    }

    sumEl.innerText = "Sum: " + sum
}




















