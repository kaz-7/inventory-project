const { faker } = require("@faker-js/faker");
const fs = require("fs");
const { nanoid } = require("nanoid");
const scubaDivingSets = require("./scubaDivingSets.json");
// const { chalk } = require("chalk");

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
// console.log(randomGear());


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
    scubaDivingSets.push(scubaSet);
    fs.writeFileSync("./scubaDivingSets.json", JSON.stringify(scubaDivingSets, null, 2));
    return scubaDivingSets[scubaDivingSets.length - 1];
}
// console.log(addScubaDivingSet(generateSet()));

//read method
function getAllScubaSets() {
    return scubaDivingSets;
}
// console.log(getAllScubaSets())

//read a single diving set by id
function getDivingSetById(uniqueId) {
    return scubaDivingSets.find(scuba => scuba.uniqueId === uniqueId) || null;
}
// console.log(getDivingSetById("7mWw2cu2PoVFAGBwikAAf"));

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
// console.log(updateScubaSet("waQZ_YXDWPvhXwpwvGYEo", { gear: [randomGear(), randomGear(), randomGear(), randomGear()] }));

//removes a value at an index
function removeScubaSet(index) {
    fs.writeFileSync("./scubaDivingSets.json", JSON.stringify(scubaDivingSets, null, 2));
   return scubaDivingSets.splice(index, 1);
}
// console.log(removeScubaSet(2));

let cart = [];

function addItemToCart(uniqueId, cart) {
    const itemData = scubaDivingSets.find(scuba => scuba.uniqueId === uniqueId) || null;

    const item = { name: itemData.name, priceInCents: itemData.priceInCents, inStock: itemData.inStock }

    cart.push(item)
    return cart;
    //   updateCart();
    }
// console.log(addItemToCart("32vdq6X2ncn8EKLA4hR7G"))

function emptyCart(cart){
    cart = [];
    return cart;
    }

function viewCart(cart) {
    if (cart.length === 0) {
        console.log('The cart is empty.');
    } else {
        console.log('Items in the cart:');
        cart.forEach(item => {
            console.log('- ${item.name} | Price: $${item.priceInCents} | inStock: ${item.inStock}');
        });
    }
}
// console.log(viewCart(cart))

module.exports = { generateSet, removeScubaSet, updateScubaSet, getDivingSetById, getAllScubaSets, addScubaDivingSet, randomGear };
