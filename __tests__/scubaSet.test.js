const { generateSet, addScubaDivingSet, randomGear, getDivingSetById, updateScubaSet } = require("../src/scubaSet.js");
const { faker } = require("@faker-js/faker");
const { nanoid } = require("nanoid");


describe("testing addScubaDivingSet()", () => {
    it("returns the value of an added object", () => {
        const newScubaSet = generateSet();
        expect(addScubaDivingSet(newScubaSet)).toEqual(newScubaSet);
    })
})


describe("testing getDivingSetById()", () => {
    it("returns an object matching the given id", () => {
        expect(getDivingSetById("FP5kktB5nrZ_MHlwZHKPT")).toEqual({
            "name": "Abbott Group",
            "color": "sky blue",
            "gear": "wetsuit",
            "priceInCents": 386751,
            "inStock": true,
            "uniqueId": "FP5kktB5nrZ_MHlwZHKPT"
        })
    })
    it("returns null if given invalid id", () => {
        expect(getDivingSetById("bhgjdsgfjevf")).toBe(null);
    })
})

describe("updateScubaSet()", () => {
    it("returns an object with the updated data if it matches the given id", () => {
        const randomGearArray = [randomGear(), randomGear(), randomGear(), randomGear()];
        expect(updateScubaSet("32vdq6X2ncn8EKLA4hR7G", { gear: randomGearArray })).toEqual({
            "name": "Stanton Group",
            "color": "orange",
            "gear": randomGearArray,
            "priceInCents": 373991,
            "inStock": false,
            "uniqueId": "32vdq6X2ncn8EKLA4hR7G"
        })
    })
})