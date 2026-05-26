function fishTank(length,width,height,percent){
    let volumeInCm = length * width * height;
    let volumeInDm3 = volumeInCm / 1000;
    let water = volumeInDm3 - (volumeInDm3 * 0.17);
    console.log(water);


}
fishTank(85,75,47,17);