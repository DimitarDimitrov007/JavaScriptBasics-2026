function footballResults(matchOne,matchTwo,matchThree){
    let wins = 0;
    let loses = 0;
    let draws = 0;

    
        let firstDigit = Number(matchOne[0]);
        let secondDigit = Number(matchOne[2]);

        if(firstDigit > secondDigit){
            wins ++;

        }else if(firstDigit < secondDigit){
            loses ++;

        }else{
            draws++;
        }

         let firstDigit2 = Number(matchTwo[0]);
        let secondDigit2 = Number(matchTwo[2]);

        if(firstDigit2 > secondDigit2){
            wins ++;

        }else if(firstDigit2 < secondDigit2){
            loses ++;

        }else{
            draws++;
        }


        let firstDigit3= Number(matchThree[0]);
        let secondDigit3 = Number(matchThree[2]);

        if(firstDigit3 > secondDigit3){
            wins ++;

        }else if(firstDigit3 < secondDigit3){
            loses ++;

        }else{
            draws++;
        }

    


    console.log(`Team won ${wins} games.`);
    console.log(`Team lost ${loses} games.`);
    console.log(`Drawn games: ${draws}`);

}
footballResults("3:1",
"0:2",
"0:0"
);