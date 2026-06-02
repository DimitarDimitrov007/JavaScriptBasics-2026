function evenOrOdd(input){
    
    // 1. Вземане на броя числа
    let n = Number(input[0]);

    // 2. Инициализиране на променливите
    let oddSum = 0.0;
    let oddMin = Infinity;
    let oddMax = -Infinity;

    let evenSum = 0.0;
    let evenMin = Infinity;
    let evenMax = -Infinity;

    // 3. Обхождане и проверка на позициите (от 1 до n)
    for (let i = 1; i <= n; i++) {
        let num = Number(input[i]);

        if (i % 2 !== 0) { // Нечетна позиция
            oddSum += num;
            if (num < oddMin) oddMin = num;
            if (num > oddMax) oddMax = num;
        } else {           // Четна позиция
            evenSum += num;
            if (num < evenMin) evenMin = num;
            if (num > evenMax) evenMax = num;
        }
    }

    // 4. Форматиране на изхода с проверка за "No" и фиксирани 2 знака след запетаята
    console.log(`OddSum=${oddSum.toFixed(2)},`);
    console.log(`OddMin=${oddMin === Infinity ? "No" : oddMin.toFixed(2)},`);
    console.log(`OddMax=${oddMax === -Infinity ? "No" : oddMax.toFixed(2)},`);
    
    console.log(`EvenSum=${evenSum.toFixed(2)},`);
    console.log(`EvenMin=${evenMin === Infinity ? "No" : evenMin.toFixed(2)},`);
    console.log(`EvenMax=${evenMax === -Infinity ? "No" : evenMax.toFixed(2)}`);
}

evenOrOdd(["6",
"2",
"3",
"5",
"4",
"2",
"1"]);
