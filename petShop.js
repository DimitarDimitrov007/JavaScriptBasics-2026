function petShop(dogPackets,catPackets){
    let totalDogFoodPrice = dogPackets * 2.50 ;
    let totalCatFoodPrice = catPackets * 4;
    let totalSum = totalCatFoodPrice + totalDogFoodPrice;
    console.log(`${totalSum} lv.`);

}
petShop(5,4);