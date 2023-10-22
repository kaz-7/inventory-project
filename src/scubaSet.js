const { faker } = require("@faker-js/faker");
const fs = require("fs");
const { nanoid } = require("nanoid");
const scubaDivingSets = require("../scubaDivingSets.json");

function randomGear() {
    const gear = [
       "mask",
       "snorkel",
       "boots",
       "fins",
       "regulator",
       "tank",
       "wetsuit",
       "dive computer",
       "submersible pressure gauge",
       "buoyancy control device",
       "Z-knife",
       "safety reel"
    ];
    return gear[Math.floor(Math.random() * gear.length)];
}

//creates object to add to json
function generateSet() {
    return {
        name: faker.company.name(),
        color: faker.color.human(),
        gear: [randomGear(), randomGear(), randomGear(), randomGear()],
        priceInCents: Math.floor(Math.random() * (500000 - 200000 + 1) + 200000),
        inStock: Math.random() > 0.5,
        uniqueId: nanoid()
    }
}

//create method
function addScubaDivingSet(scubaSet) {
    scubaSet.uniqueId = nanoid();
    scubaSet.gear = randomGear();
    scubaDivingSets.push(scubaSet);
    fs.writeFileSync("./scubaDivingSets.json", JSON.stringify(scubaDivingSets, null, 2));
    return scubaDivingSets[scubaDivingSets.length - 1];
}

//read method
function getAllScubaSets() {
    return scubaDivingSets;
}

//read a single diving set by id
function getDivingSetById(uniqueId) {
    return scubaDivingSets.find(scuba => scuba.uniqueId === uniqueId) || null;
}

//updates an index value
function updateScubaSet(uniqueId, newScubaData) {
    const index = scubaDivingSets.findIndex(element => element.uniqueId === uniqueId);
    scubaDivingSets[index] = {
        ...scubaDivingSets[index], 
        ...newScubaData
    }
    fs.writeFileSync("./scubaDivingSets.json", JSON.stringify(scubaDivingSets, null, 2));
    return scubaDivingSets[index];
}

//removes a value at an index
function removeScubaSet(index) {
    scubaDivingSets.splice(index, 1);
    fs.writeFileSync("./scubaDivingSets.json", JSON.stringify(scubaDivingSets, null, 2));
   return "deleted";
}

module.exports = {
    generateSet, 
    removeScubaSet, 
    updateScubaSet, 
    getDivingSetById, 
    getAllScubaSets, 
    addScubaDivingSet, 
    randomGear 
};