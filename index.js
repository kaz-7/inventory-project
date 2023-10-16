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
