function logistics(input){

    let numberOfPackages = Number(input[0]);
    let price = 0;
    let totalTons = 0;
    let tonsWithBus = 0;
    let tonsWithTruck = 0;
    let tonsWithTrain = 0;

    for(let i = 1; i < input.length;i++){
        let currentPackageWeight = Number(input[i]);

        if(currentPackageWeight <= 3){
            price += currentPackageWeight * 200;
            totalTons += currentPackageWeight;
            tonsWithBus += currentPackageWeight;

        }else if(currentPackageWeight >= 4 && currentPackageWeight <= 11){
            price += currentPackageWeight * 175;
            totalTons += currentPackageWeight;
            tonsWithTruck += currentPackageWeight;

        }else{
            price += currentPackageWeight * 120;
            totalTons += currentPackageWeight;
            tonsWithTrain += currentPackageWeight;
        }

    }

    console.log(`${(price / totalTons).toFixed(2)}`);
    console.log(`${((tonsWithBus / totalTons) * 100).toFixed(2)}%`);
    console.log(`${((tonsWithTruck / totalTons) * 100).toFixed(2)}%`);
    console.log(`${((tonsWithTrain / totalTons) * 100).toFixed(2)}%`);


}
logistics(["4",
"1",
"5",
"16",
"3"]);
