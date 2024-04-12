// Part 1: Growing Pains
console.log("=================Part1 Growing Pains=======================")

// constants
const gardenRadius = 5;
const PI = 3.1415;
const gardenArea = PI * gardenRadius * gardenRadius;
// maximun number of plants that garden can hold
const spaceForEachPlants = 0.8;
const maxNumberOfPlants = gardenArea/spaceForEachPlants;

// Initial number of plants
let startingPlantNumber = 20;

// After First week plants double
let plantCountAfterWeek1 = startingPlantNumber * Math.pow(2,1);// after first week it just doubles
if (plantCountAfterWeek1 > 0.8 * maxNumberOfPlants){
    console.log("Please prun to prevent from exceding maximum capacity");
}else if(plantCountAfterWeek1 <= 0.8 * maxNumberOfPlants && plantCountAfterWeek1 >= 0.5 * maxNumberOfPlants){
    console.log("Monitor the growth of plants");
}else{
    console.log("There is room for more plants.");
}

// After second week plants double
let plantCountAfterWeek2 = startingPlantNumber * Math.pow(2,2);// this is double of week one --> going exponent
if (plantCountAfterWeek2 > 0.8 * maxNumberOfPlants){
    console.log("Please prun to prevent from exceding maximum capacity");
}else if(plantCountAfterWeek2 <= 0.8 * maxNumberOfPlants && plantCountAfterWeek2 >= 0.5 * maxNumberOfPlants){
    console.log("Monitor the growth of plants");
}else{
    console.log("There is room for more plants.");
}
// After Third week plants double
let plantCountAfterWeek3 = startingPlantNumber * Math.pow(2,3);// again this will double that of week 2
if (plantCountAfterWeek3 > 0.8 * maxNumberOfPlants){
    console.log("Please prun to prevent from exceding maximum capacity");
}else if(plantCountAfterWeek3 <= 0.8 * maxNumberOfPlants && plantCountAfterWeek3 >= 0.5 * maxNumberOfPlants){
    console.log("Monitor the growth of plants");
}else{
    console.log("There is room for more plants.");
}


console.log("================= part 2. Thinking Bigger=======================")
// Part 2: Thinking Bigger
// The conservation area in which the garden is located has multiple other gardens. 
// Using the logic you have already created, determine:
// The amount of additional space that would be required if the scientists were to start with 100 plants, and did not prune them for 10 weeks.
// If the space remained circular, what would be the radius of this expanded garden?
startingPlantNumber = 100;
let plantCountAfterWeek10 = startingPlantNumber * Math.pow(2, 10);
//console.log(plantCountAfterWeek10);
let gardenAreaRequired = plantCountAfterWeek10 * spaceForEachPlants;
let additionalSpaceRequired = gardenAreaRequired - gardenArea // subtracting the initial area to find additional space
let radiusRequired = Math.sqrt(gardenAreaRequired/PI);
console.log(`The additional space required for the plant is ${additionalSpaceRequired} squared meters.
Also the required garden radius would be ${radiusRequired} meters`)

console.log("================= Part 3: Errors in Judgement=======================")
// The scientists decided not to listen to your recommendations, and have instead started with 100 plants in the original 5-meter-radius garden.
// Use try and catch to wrap your work in an error-handling block. If the amount of space required to hold the originally provided number of plants exceeds the amount of space available, throw a new error and log an appropriate message.


try{
    if(gardenAreaRequired > gardenArea){
        throw("The space required for plants is more thatn available garden area.");
    }
}catch(err){
    console.log(err);
}

