function solve(){

    for(let i = 1 ; i <= 1000; i++){
        let numString = String(i);

        if(numString.charAt(numString.length - 1) === "7"){
            console.log(Number(numString));

        }

    }
}
solve();