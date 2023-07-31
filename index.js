// Code your solution here
function findMatching (array, name) {
    return array.filter(function (driver) {
        return driver.toLowerCase() === name.toLowerCase();
    });
}
function fuzzyMatch (array, begName) {
    let partOfName = begName.length;
    return array.filter(function (driver) {
        return driver.slice(0,partOfName) ===begName;    
});
}
function matchName (array, name) {
    return array.filter(function (driver) {
        return driver.name.toLowerCase() === name.toLowerCase();
    });
}