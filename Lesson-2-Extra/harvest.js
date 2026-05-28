function harvest(area,grapesPerSqM,wineNeeded,workers){

    let totalGrapes = area * grapesPerSqM;
    let grapesForWine = totalGrapes * 0.4;
    let wineMade = grapesForWine / 2.5;

    if(wineMade >= wineNeeded){
        console.log(`Good harvest this year! Total wine: ${Math.floor(wineMade)} liters.`);
        console.log(`${Math.ceil(wineMade - wineNeeded)} liters left -> ${Math.ceil((wineMade - wineNeeded) / workers)} liters per person.`);
    }else{
        console.log(`It will be a tough winter! More ${Math.floor(wineNeeded - wineMade)} liters wine needed.`);
    }

}
harvest(1020,1.5,425,4);