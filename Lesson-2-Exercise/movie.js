function movie(budget,statists,pricePerPerson){
let deccors = budget * 0.1;
let moneyForClothes = statists * pricePerPerson;

if(statists > 150){
    moneyForClothes = moneyForClothes * 0.9;

}
let totalExpenses = deccors + moneyForClothes;

if(totalExpenses <= budget ){
   console.log(`Action!`);
   console.log(`Wingard starts filming with ${(budget - totalExpenses).toFixed(2)} leva left.`);
}else{
console.log(`Not enough money!`);
console.log(`Wingard needs ${(totalExpenses - budget).toFixed(2)} leva more.`);
}

}
movie(20000,120,55.5);