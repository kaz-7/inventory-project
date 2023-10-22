const {
    generateSet, 
    removeScubaSet, 
    updateScubaSet, 
    getDivingSetById, 
    getAllScubaSets, 
    addScubaDivingSet, 
    randomGear
} = require("./src/scubaSet");

// const { chalk } = require("chalk");

const { 
    viewCart, 
    addItemToCart, 
    cancelCart
} = require ("./src/cart");

function run() {
    const command = process.argv[2];
    if (command === "add"){
        console.log("getting ready to add scuba set");
        const [name, color, priceInCents, inStock] = process.argv.slice(3);
        const scubaDetails = {name, color, priceInCents, inStock};
        console.log(addScubaDivingSet(scubaDetails));
    } else if(command === "update"){
        console.log("getting ready to update scuba set");
        const [uniqueId, name, color, priceInCents, inStock] = process.argv.slice(3);
        const newScubaDetails = {name, color, priceInCents, inStock};
        console.log(updateScubaSet(uniqueId, newScubaDetails));
    } else if(command === "read"){
        console.log("getting ready to read scuba set");
        const [uniqueId] = process.argv.slice(3);
        console.log(getDivingSetById(uniqueId));
    } else if (command === "delete"){
        console.log("getting ready to delete scuba set");
        const [index] = process.argv[3];
        removeScubaSet(index);
        console.log("Scuba set deleted");
    } else if (command === "addToCart"){
        console.log("Adding to cart");
        const [uniqueId] = process.argv.slice(3);
        console.log(addItemToCart(uniqueId));
    } else if (command === "emptyCart"){
        console.log("emptying cart");
        cancelCart();
    } else if (command === "viewCart"){
        console.log("viewing cart");
        viewCart();
    }
}

run();
