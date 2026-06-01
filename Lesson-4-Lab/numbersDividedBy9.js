function solve(n1,n2){
    let sum = 0;
    let numbers = [];

    for(let i = n1; i < n2; i++){
        if(i % 9 === 0){
            numbers.push(i);
            sum += Number(i);
        }
    }

    console.log(`The sum: ${sum}`);

    for(let i = 0; i < numbers.length; i++){
        console.log(numbers[i]);
    }

}
solve(100, 200);