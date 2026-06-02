function graduation(input){

    let student = input[0];
    let notPassed = 0;
    let grades = 0;
    let gradesSum = 0;

    for(let i = 1 ; i < input.length; i++){

        let currentGrade = Number(input[i]);
        gradesSum += currentGrade;


        if(currentGrade < 4){
            notPassed +=1;
        }

        if(notPassed > 1){
            console.log(`${student} has been excluded at ${grades} grade`);
            break;
        }

        grades +=1;
        
    }

     if(notPassed <= 1){
    console.log(`${student} graduated. Average grade: ${(gradesSum / grades).toFixed(2)}`);

     }

}
graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"]);

