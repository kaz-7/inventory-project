const cart = require("../cart.json");
const scubaDivingSets = require("../scubaDivingSets.json");
const fs = require("fs");


function addItemToCart(uniqueId) {
    const itemData = scubaDivingSets.find(scuba => scuba.uniqueId === uniqueId);
    const item = { name: itemData.name, priceInCents: itemData.priceInCents, inStock: itemData.inStock };
    cart.push(item);
    fs.writeFileSync("./cart.json", JSON.stringify(cart, null, 2));
    return cart;
}
// console.log(addItemToCart("7mWw2cu2PoVFAGBwikAAf"));

function cancelCart(cart){
    cart = [];
    fs.writeFileSync("./cart.json", JSON.stringify(cart, null, 2));
    return cart;
}
// console.log(cancelCart(cart));

function viewCart() {
    if (cart.length === 0) {
        console.log('The cart is empty.');
    } else {
        console.log('Items in the cart:');
        cart.forEach(item => {
            console.log(`${item.name} | priceInCents: ${item.priceInCents} | inStock: ${item.inStock}`);
        });
    }
}
// viewCart();

module.exports = {
    viewCart, 
    addItemToCart, 
    cancelCart, 
}