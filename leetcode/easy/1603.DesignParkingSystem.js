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


const parkingSystem = new ParkingSystem(1, 1, 0);
parkingSystem.addCar(1); // return true because there is 1 available slot for a big car
parkingSystem.addCar(2); // return true because there is 1 available slot for a medium car
parkingSystem.addCar(3); // return false because there is no available slot for a small car
parkingSystem.addCar(1); // return false because there is no available slot for a big car. It is already occupied.