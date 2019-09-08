var cards =[ 
    {
        rank:"queen",
        suit:"hearts",
        image:"images/queen-of-hearts.png",
        

    },
    {
        rank:"queen",
        suit:"Dimonds",
        image:"images/queen-of-diamonds.png",
        

    },
    {
    rank:"king",
    suit:"hearts",
    image:"images/king-of-hearts.png",
   

    },
    {
        rank:"king",
        suit:"Dimonds",
        image:"images/king-of-diamonds.png",
        

    }
];
var cardsInPlay = []
var game_board = document.getElementById("game_board");

function createBoard(){
    for (var i = 0; i < cards.length; i++) {
      var cardElement = document.createElement("img");
        cardElement.setAttribute("src","images/back.png")
        cardElement.setAttribute("data-id",i);
        cardElement.addEventListener("click",flipCard);
        game_board.appendChild(cardElement);
    }
    
    
    
    
};
createBoard();

let playerScore = document.querySelector(".score");
let lost = document.querySelector(".lose");
playerScore=1
lost=1
function checkForMatch(){
    if (cardsInPlay[0] === cardsInPlay[1]) {
        document.querySelector(".score").innerHTML=playerScore++;
        console.log("You found a match!");
        alert("You found a match!");
      } else {
          document.querySelector(".lose").innerHTML=lost++;
        console.log("Sorry, try again.");
        alert("Sorry, try again.");
      }
}
function flipCard(){
    var cardId = this.getAttribute("data-id")
    ;
    console.log("User flipped " + cards[cardId].rank);
    cardsInPlay.push(cards[cardId].rank);
    console.log("user chose " + cards[cardId].suit);
    console.log(cards[cardId].image);
    this.setAttribute("src",cards[cardId].image)

 
     if( cardsInPlay.length === 2){
         checkForMatch();
    } 
}
// var restart = document.querySelector(".back").addEventListener("click",reset);
// var game_board = document.getElementById("game_board");

    // function reset(){
    //     createBoard();
    //     if (game_board.parentNode) {
    //         game_board.parentNode.removeChild(game_board)
            
            
    //     }
       
    // }
    
           
        
        
    
        
    
    
    
  
            

    












