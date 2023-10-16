const { randomGear, getDivingSetById, removeScubaSet } = require("../index");


describe("testing randomGear()", () => {
    it("returns a string representing the value at a random index", () => {
        expect(randomGear()).toBe("fins");
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

describe ("testing removeScubaSet()", () => {
    it("returns the removed object inside an array",() =>{
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