'use strict';

class PriceRepairSimple {
    constructor(waterproof, reinforcement, screed) {
        this.waterproof = waterproof;
        this.reinforcement = reinforcement;
        this.screed = screed;
    }

    get fullCost() {
        return Object.values(this).reduce((acc, num) => acc + num);
    }
}

class PriceRepairBroad extends  PriceRepairSimple{
    constructor(waterproof, reinforcement, screed, insulationFloor, layingPlywood) {
        super(waterproof, reinforcement, screed);
        this.insulationFloor = insulationFloor;
        this.layingPlywood = layingPlywood;
    }
}

class PriceRepairAll extends  PriceRepairBroad{
    constructor(waterproof, reinforcement, screed, insulationFloor, layingPlywood, laminate) {
        super(waterproof, reinforcement, screed, insulationFloor, layingPlywood);
        this.laminate = laminate;
    }
}

const priceRepairSimple = new PriceRepairSimple(25, 10, 20);
const priceRepairBroad = new PriceRepairBroad(25, 10, 20, 5, 15);
const priceRepairAll = new PriceRepairAll(25, 10, 20, 5, 15, 30);


console.log('simple repair:', priceRepairSimple.fullCost);
console.log('broad repair:', priceRepairBroad.fullCost);
console.log('all repair:', priceRepairAll.fullCost);