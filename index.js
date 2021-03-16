function findMatching(driverNames, string) {
    return driverNames.filter( (driverName) => driverName.toUpperCase() == string.toUpperCase())
};

function fuzzyMatch(driverNames, string){
    return driverNames.filter( (driverName) => driverName[0] == string[0]);
};

function matchName(driverObjects, string) {
    return driverObjects.filter( (object) => {
        return object.name == string
    })
}