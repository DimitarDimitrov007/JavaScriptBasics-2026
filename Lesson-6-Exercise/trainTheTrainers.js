function trainers(input){
    let currentPresentationMarks = 0;
    let totalMarks = 0;
    let judges = Number(input[0]);
    let currentPresentation = input[1];
    let index = 2;
    let totalMarksCount = 0;
    let count = 0;


    while(currentPresentation !== "Finish"){

        while(count < judges){
            let curentMark = Number(input[index]);
            count ++;
            index++;
            currentPresentationMarks += curentMark;
            totalMarks += curentMark;
            totalMarksCount ++;
        }

        console.log(`${currentPresentation} - ${(currentPresentationMarks / judges).toFixed(2)}.`);

        currentPresentation = input[index];
        currentPresentationMarks = 0;
        index ++
        count = 0;

    }

    console.log(`Student's final assessment is ${(totalMarks / totalMarksCount).toFixed(2)}.`);

}
trainers(["2",
"While-Loop",
"6.00",
"5.50",
"For-Loop",
"5.84",
"5.66",
"Finish"]);
