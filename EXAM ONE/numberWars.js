function numberWars(input) {
    let playerOne = String(input[0]);
    let playerTwo = String(input[1]);
    let playerOneScore = 0;
    let playerTwoScore = 0;
    let currentCard = String(input[2]);
    let index = 2;

    while(currentCard !== "End of game"){
        let playerOneCard = Number(currentCard);
        let playerTwoCard = Number(input[index + 1]);
      

        if(playerOneCard > playerTwoCard){
            playerOneScore += playerOneCard - playerTwoCard;


        }else if(playerOneCard < playerTwoCard){
            playerTwoScore += playerTwoCard - playerOneCard;

        }else if(playerOneCard === playerTwoCard){
            console.log("Number wars!");
            index += 2;

            playerOneCard = Number(input[index]);
            playerTwoCard = Number(input[index + 1]);

            if(playerOneCard > playerTwoCard){
                console.log(`${playerOne} is winner with ${playerOneScore} points`);
                return;

            }else{
                console.log(`${playerTwo} is winner with ${playerTwoScore} points`);
                return;

            }

        }

        index +=2;

        currentCard = String(input[index]);


    }

    console.log(`${playerOne} has ${playerOneScore} points`);
    console.log(`${playerTwo} has ${playerTwoScore} points`);

}
numberWars(["Desi",
    "Niki",
    "7",
    "5",
    "3",
    "4",
    "3",
    "3",
    "5",
    "3"]);
