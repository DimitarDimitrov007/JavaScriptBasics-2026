function steps(input){

    let totalSteps = 0;
    let index = 0;

    while(totalSteps < 10000){

        let currentSteps = input[index];

        if(currentSteps === "Going home"){
            let lastSteps = Number(input[index + 1]);
            totalSteps += lastSteps;

            if(totalSteps >= 10000){
                break;

            }else{
                console.log(`${10000 - totalSteps} more steps to reach goal.`);
                break;
            }

        }else{
            currentSteps = Number(currentSteps);
            totalSteps += currentSteps;

        }

        index ++;
    }

    if(totalSteps >= 10000){
                console.log("Goal reached! Good job!");
                console.log(`${totalSteps - 10000} steps over the goal!`);
                
            }

}
steps(["1000",
"1500",
"2000",
"6500"]);
