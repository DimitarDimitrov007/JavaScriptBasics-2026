function bE(tax){
let shoesPrice = tax * 0.6;
let clothesPrice = shoesPrice * 0.8;
let ballPrice = clothesPrice / 4;
let othersPrice = ballPrice / 5;
let total = shoesPrice + clothesPrice + ballPrice + othersPrice + tax;
console.log(total);
}
bE(365);