function distanceFromHqInBlocks(adress) {
    if(adress > 42){
        return adress - 42;
    }
    else {
        return 42 - adress;
    }
}
function distanceFromHqInFeet(adress) {
    return distanceFromHqInBlocks(adress) * 264;
}
function distanceTravelledInFeet(startBlock, endBlock) {
    if(startBlock <= endBlock) {
        return (endBlock - startBlock) * 264
    } 
    else {
        return (startBlock - endBlock) * 264
    }
} 
function calculatesFarePrice(start, destination) {
    let feet;
    if(distanceTravelledInFeet(start, destination) <= 400) {
        return 0
    }
    else if (distanceTravelledInFeet(start, destination) < 2000) {
        return (distanceTravelledInFeet(start, destination) - 400) * 2 / 100;
    }
    else if (distanceTravelledInFeet(start, destination) < 2500) {
        return 25;
    }
    else {
        return 'cannot travel that far';
    }
    
}