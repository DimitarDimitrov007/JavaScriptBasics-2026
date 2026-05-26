function ani(pencils,markers,liquid,percent){
    let pencilPrice = pencils * 5.8;
    let markerPrice = markers * 7.2;
    let liquidPrice = liquid * 1.2;
    let totalSum = pencilPrice + markerPrice + liquidPrice;
    let discount = totalSum * (percent / 100);
    let finalPrice = totalSum - discount;
    console.log(finalPrice);

}
ani(2,3,4,25 );