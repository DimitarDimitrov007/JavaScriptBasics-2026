function solve(input){
    let count = Number(input[0]);
    let groupOne = [];
    let groupTwo = [];
    let groupThree = [];
    let groupFour = [];
    let groupFive = [];

    for(let i = 1; i < input.length; i++){
        let number = Number(input[i]);

        if(number < 200){
            groupOne.push(number);

        }else if(number >= 200 && number <= 399){
            groupTwo.push(number);

        }else if(number >= 400 && number <=599){
            groupThree.push(number);

        }else if(number >=600 && number <= 799){
            groupFour.push(number);

        }else{
           groupFive.push(number);
        }

    }

    console.log(`${((groupOne.length / count) * 100).toFixed(2)}%`);
    console.log(`${((groupTwo.length / count) * 100).toFixed(2)}%`);
    console.log(`${((groupThree.length / count) * 100).toFixed(2)}%`);
    console.log(`${((groupFour.length / count) * 100).toFixed(2)}%`);
    console.log(`${((groupFive.length / count) * 100).toFixed(2)}%`);

}
solve([3,1,2,999]);