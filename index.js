const { faker } = require("@faker-js/faker");
const fs = require("fs");
const { nanoid } = require("nanoid");
const scubaDivingSets = require("./scubaDivingSets.json");

// const scubaDivingSets = [
//     {
//         name: "",
//         color: "",
//         gear: [""],
//         priceInCents: 0,
//         inStock: true,
//         uniqueId: ""
//     }
// ]


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

// for(let i = 0; i < 5; i++) {
//     addScubaDivingSet();
// }

fs.writeFileSync("./scubaDivingSets.json", JSON.stringify(scubaDivingSets));

//create method
function addScubaDivingSet() {
    scubaDivingSets.push({
        name: faker.company.name(),
        color: faker.color.human(),
        gear: [randomGear(), randomGear(), randomGear(), randomGear()],
        priceInCents: Math.floor(Math.random() * (500000 - 200000 + 1) + 200000),
        inStock: Math.random() > 0.5,
        uniqueId: nanoid()
    })
    fs.writeFileSync("./scubaDivingSets.json", JSON.stringify(scubaDivingSets));
    return scubaDivingSets[scubaDivingSets.length - 1];
}
// console.log(addScubaDivingSet());

//read method
function getAllScubaSets() {
    return scubaDivingSets;
}
// console.log(getAllScubaSets())

//read a single diving set by id
function getDivingSetById(uniqueId) {
    return scubaDivingSets.find(scuba => scuba.uniqueId === uniqueId) || null;
}
// console.log(getDivingSetById("54XSm6JalSN80lSOEBTAo"));

//updates an index value
function updateScubaSet(index, newScubaData) {
    scubaDivingSets[index] = {
        ...scubaDivingSets[index], ...newScubaData
    }
    fs.writeFileSync("./scubaDivingSets.json", JSON.stringify(scubaDivingSets));
    return scubaDivingSets[index];
}
// console.log(updateScubaSet(4, { gear: [randomGear(), randomGear(), randomGear(), randomGear()] }));

//removes a value at an index
function removeScubaSet(index) {
    fs.writeFileSync("./scubaDivingSets.json", JSON.stringify(scubaDivingSets));
   return scubaDivingSets.splice(index, 1);
}
// console.log(removeScubaSet(2));


module.exports = { removeScubaSet, updateScubaSet, getDivingSetById, getAllScubaSets, addScubaDivingSet };
