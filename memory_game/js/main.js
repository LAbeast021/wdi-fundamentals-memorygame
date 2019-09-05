var cards =[ 
    {
        rank:"queen",
        suit:"hearts",
        image:"images/queen-of-hearts.png"

    },
    {
        rank:"queen",
        suit:"Dimonds",
        image:"images/queen-of-diamonds.png"

    },
    {
    rank:"king",
    suit:"hearts",
    image:"images/king-of-hearts.png"

    },
    {
        rank:"king",
        suit:"Dimonds",
        image:"images/king-of-diamonds.png"

    }
];
var cardsInPlay = []

function checkForMatch(){
    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("You found a match!");
        alert("You found a match!");
      } else {
        console.log("Sorry, try again.");
        alert("Sorry, try again.");
      }
}

function flipCard(cardId){
    console.log("User flipped " + cards[cardId].rank);
    cardsInPlay.push(cards[cardId].rank)
    console.log("user chose " + cards[cardId].suit);
    console.log(cards[cardId].image);
 
     if( cardsInPlay.length === 2){
         checkForMatch();
   
    } 
}


flipCard(0);
flipCard(2);