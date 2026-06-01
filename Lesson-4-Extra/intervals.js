function solve(input){

    let numbers = Number(input[0]);
    let score = 0;
    let type1 = 0;
    let type2 = 0;
    let type3 = 0;
    let type4 = 0;
    let type5 = 0;
    let type6 = 0;


    for(let i = 1; i < input.length; i ++){
        let curretNumber = Number(input[i]);

        if(curretNumber >= 0 && curretNumber <= 9 ){
            score += curretNumber * 0.2;
            type1 += 1;

        }else if(curretNumber >= 10 && curretNumber <=19){
            score += curretNumber * 0.3;
            type2 += 1;

        }else if(curretNumber >= 20 && curretNumber <=29){
            score += curretNumber * 0.4;
            type3 += 1;

        }else if(curretNumber >= 30 && curretNumber <= 39){
            score += 50;
            type4 +=1;

        }else if(curretNumber >= 40 && curretNumber <= 50){
            score += 100;
            type5 += 1;

        }else if(curretNumber > 50 || curretNumber < 0){
            score = score / 2;
            type6 += 1;
        }
    }

    console.log(score.toFixed(2));
    console.log(`From 0 to 9: ${((type1 / numbers) * 100).toFixed(2)}%`);
    console.log(`From 10 to 19: ${((type2 / numbers) * 100).toFixed(2)}%`);
      console.log(`From 20 to 29: ${((type3 / numbers) * 100).toFixed(2)}%`);
        console.log(`From 30 to 39: ${((type4 / numbers) * 100).toFixed(2)}%`);
          console.log(`From 40 to 50: ${((type5 / numbers) * 100).toFixed(2)}%`);
            console.log(`Invalid numbers: ${((type6 / numbers) * 100).toFixed(2)}%`);

}
solve(["10",
"43",
"57",
"-12",
"23",
"12",
"0",
"50",
"40",
"30",
"20"]);
