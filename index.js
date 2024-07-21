// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42; // Assuming Scuber's headquarters is located at block number 42
    return Math.abs(pickupLocation - hqLocation);
}
function distanceFromHqInFeet(pickupLocation) {
    const feetPerBlock = 264; // Assuming each city block is 264 feet
    const blocks = distanceFromHqInBlocks(pickupLocation);
    const feet = blocks * feetPerBlock;
    return feet;
}

function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264;
    const blocksTraveled = Math.abs(destination - start);
    const feetTraveled = blocksTraveled * feetPerBlock;
    return feetTraveled;
}
function calculatesFarePrice(start, destination) {
    const feetPerBlock = 264;
    const distance = Math.abs(destination - start) * feetPerBlock;

    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}