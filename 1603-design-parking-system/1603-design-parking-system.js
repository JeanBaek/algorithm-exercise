/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
const ParkingSystem = function (big, medium, small) {
    this.slots = {
        big,
        medium,
        small
    };

    this.addBigCar = function () {
        if (this.slots.big > 0) {
            this.slots.big--;
            return true;
        } else return false;
    }

    this.addMediumCar = function () {
        if (this.slots.medium > 0) {
            this.slots.medium--;
            return true;
        } else return false;
    }

    this.addSmallCar = function () {
        if (this.slots.small > 0) {
            this.slots.small--;
            return true;
        } else return false;
    }
};

/**
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
    if (carType === 1)
        return this.addBigCar();
    else if (carType === 2)
        return this.addMediumCar();
    else  // carType === 3
        return this.addSmallCar();
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */