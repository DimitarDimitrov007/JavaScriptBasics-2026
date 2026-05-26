function yardGreening(sqM){
    let pricePerMeter = 7.61;
    let totalPrice = sqM * pricePerMeter;
    let finalPrice = totalPrice - Number(totalPrice * 0.18);
    let discount = totalPrice * 0.18;


console.log(`The final price is: ${finalPrice} lv.`);
console.log(`The discount is: ${discount} lv.`);


}
yardGreening(550);