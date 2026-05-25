function repainting(nylon,paint,razreditel,workingHours){
let moneyForNylon = nylon * 1.5 + 2 * 1.5;
let moneyForPaint = paint * 14.5 + ((paint * 0.1) * 14.5);
let moneyForRazreditel = razreditel *5 ;
let moneyForBags = 0.4;
let totalMaterialCost = moneyForNylon + moneyForPaint + moneyForRazreditel + moneyForBags;
let laborCostPerHour = totalMaterialCost * 0.3;
let totalLaborCost = laborCostPerHour * workingHours;
console.log(`${totalMaterialCost + totalLaborCost}`);

}
repainting(10,11,4 ,8);