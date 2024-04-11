// Part 1: Growing Pains

// constants
const gardenRadius = 5;
const PI = 3.1415;
const gardenArea = PI * gardenRadius * gardenRadius;
// maximun number of plants that garden can hold
const spaceForEachPlants = 0.8;
const maxNumberOfPlants = gardenArea/spaceForEachPlants;

// Initial number of plants
const startingPlantNumber = 20;

// After First week plants double
let plantCountAfterWeek1 = startingPlantNumber * 2;
if (plantCountAfterWeek1 > 0.8 * maxNumberOfPlants){
    console.log("Please prun to prevent from exceding maximum capacity");
}else if(plantCountAfterWeek1 <= 0.8 * maxNumberOfPlants && plantCountAfterWeek1 >= 0.5 * maxNumberOfPlants){
    console.log("Monitor the growth of plants");
}else{
    console.log("There is room for more plants.");
}

// After second week plants double
let plantCountAfterWeek2 = plantCountAfterWeek1 * 2;
if (plantCountAfterWeek2 > 0.8 * maxNumberOfPlants){
    console.log("Please prun to prevent from exceding maximum capacity");
}else if(plantCountAfterWeek2 <= 0.8 * maxNumberOfPlants && plantCountAfterWeek2 >= 0.5 * maxNumberOfPlants){
    console.log("Monitor the growth of plants");
}else{
    console.log("There is room for more plants.");
}
// After First week plants double
let plantCountAfterWeek3 = plantCountAfterWeek2 * 2;
if (plantCountAfterWeek3 > 0.8 * maxNumberOfPlants){
    console.log("Please prun to prevent from exceding maximum capacity");
}else if(plantCountAfterWeek3 <= 0.8 * maxNumberOfPlants && plantCountAfterWeek3 >= 0.5 * maxNumberOfPlants){
    console.log("Monitor the growth of plants");
}else{
    console.log("There is room for more plants.");
}
