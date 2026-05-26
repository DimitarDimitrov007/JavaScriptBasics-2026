function areaOfFiures(figure,a,b){
    if(figure ==="square"){
        console.log((a * a).toFixed(3));

    }else if(figure ==="rectangle"){
        console.log((a * b).toFixed(3));

    }else if(figure === "circle"){
        console.log((Math.PI * Math.pow(a , 2)).toFixed(3));

    }else if(figure === "triangle"){
        console.log(((a * b ) / 2).toFixed(3));
    }


}
areaOfFiures("triangle",
4.5,
20
);