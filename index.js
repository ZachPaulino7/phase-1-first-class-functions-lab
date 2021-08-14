// Code your solution in this file!

const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function(){
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(){
    return drivers.slice (2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(x) {
    return function(y) {
        return x*y;
    }
}

const fareDoubler = function createFareMultiplier(x) {
    return x * 2
}

const fareTripler = function createFareMultiplier(x) {
    return x * 3
}

const selectDifferentDrivers = function(drivers, returnFirstTwoDrivers) {
return returnFirstTwoDrivers(drivers);
}
