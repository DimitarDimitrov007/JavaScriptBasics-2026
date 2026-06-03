function exam(input){

    let badMarks = 0;
    let marksSum = 0;
    let numberOfMarks = 0;
    let limit = Number(input[0]);
    let hadEnough = false;
    let currentTaskName = input[1];
    let lastName = currentTaskName;
    index = 1;

    while(currentTaskName !== "Enough"){
        let currentTaskScore = Number(input[index + 1]);
        marksSum += currentTaskScore;
        numberOfMarks += 1;
        lastName = currentTaskName;

        if(currentTaskScore <= 4){
            badMarks += 1;
        }
        
         if(badMarks === limit){
            hadEnough = true;
            break;
         }

         index += 2;

         currentTaskName = input[index];
         
    }

    if(hadEnough === true){
        console.log(`You need a break, ${badMarks} poor grades.`);

    }else{
    console.log(`Average score: ${(marksSum / numberOfMarks).toFixed(2)}`);
	console.log(`Number of problems: ${numberOfMarks}`);
	console.log(`Last problem: ${lastName}`);

    }

}
exam(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"]);
