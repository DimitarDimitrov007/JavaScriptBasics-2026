function depostiCalc(sum,months,percent){
  let yearlyInterest = sum * (percent / 100);
  let monthlyInterest = yearlyInterest / 12;
  let result = sum + monthlyInterest * months;

//сума = депозирана сума  + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)
console.log(result);

}
depostiCalc(200,3,5.7 );