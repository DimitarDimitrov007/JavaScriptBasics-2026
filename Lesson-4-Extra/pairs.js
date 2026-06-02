function pairs(input){
    
    let n = Number(input[0]);
    let previousSum = 0;
    let maxDiff = 0;
    
    for (let i = 1; i <= 2 * n; i += 2) {
        let num1 = Number(input[i]);
        let num2 = Number(input[i + 1]);
        
        let currentSum = num1 + num2;
        
       
        if (i === 1) {
            previousSum = currentSum;
        } else {
            
            let currentDiff = Math.abs(currentSum - previousSum);
            
            
            if (currentDiff > maxDiff) {
                maxDiff = currentDiff;
            }
            
          
            previousSum = currentSum;
        }
    }
    
    
    if (maxDiff === 0) {
        console.log(`Yes, value=${previousSum}`);
    } else {
        console.log(`No, maxdiff=${maxDiff}`);
    }
}

pairs([2,
-1,
0,
0,
-1]);


