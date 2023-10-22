const { generateSet, addScubaDivingSet, randomGear, getDivingSetById, removeScubaSet, updateScubaSet } = require("../index");
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
        expect(getDivingSetById("7mWw2cu2PoVFAGBwikAAf")).toEqual({
            name: 'Conn Group',
            color: 'violet',
            gear: [ 'safety reel', 'dive computer', 'dive computer', 'dive computer' ],
            priceInCents: 278489,
            inStock: false,
            uniqueId: '7mWw2cu2PoVFAGBwikAAf'
        })
    })
    it("returns null if given invalid id", () => {
        expect(getDivingSetById("bhgjdsgfjevf")).toBe(null);
    })
})

describe("updateScubaSet()", () => {
    it("returns an object with the updated data if it matches the given id", () => {
        const randomGearArray = [randomGear(), randomGear(), randomGear(), randomGear()];
        expect(updateScubaSet("waQZ_YXDWPvhXwpwvGYEo", { gear: randomGearArray })).toEqual({
            name: 'Schumm, Leffler and Walsh',
            color: 'purple',
            gear: randomGearArray,
            priceInCents: 278637,
            inStock: true,
            uniqueId: 'waQZ_YXDWPvhXwpwvGYEo'
        })
    })
})

describe ("testing removeScubaSet()", () => {
    it("returns the value of a removed object",() =>{
        expect(removeScubaSet(2)).toEqual([
            {
              name: 'Stanton Group',
              color: 'orange',
              gear: [ 'buoyancy control device', 'safety reel', 'safety reel', 'fins' ],
              priceInCents: 373991,
              inStock: false,
              uniqueId: '32vdq6X2ncn8EKLA4hR7G'
            }
        ])
    })
})