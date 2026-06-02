function sum(input){

    let sum = 0;
    let number = Number(input[0]);
    let index = 1;
    let currentNumber = Number(input[index]);
    index ++;

    while(sum < number){
        sum += currentNumber;
        currentNumber = Number(input[index]);
        index ++;


    }

    console.log(sum);

}
sum(["100",
"10",
"20",
"30",
"40"]);
