function CarMaker() {}

CarMaker.prototype.drive = function () {
  return "Vroom, I have" + this.doors + "doors"
};

CarMaker.factory = function (type) {
  var constr = type,
      newCar;


  if(typeof CarMaker[constr] !== "function") {
    throw {
      name: "Error",
      message: constr + " doesn't exists"
    }
  }

  //Contructor exists let's make it inherit from parent but only once
  if(typeof CarMaker[constr].prototype.drive !== "function") {
    CarMaker[constr].prototype = new CarMaker()
  }

  newCar = new CarMaker[constr]();

  return newCar;
}

CarMaker.Compact = function () {
  this.doors = 4;
}

CarMaker.Convertible = function () {
  this.doors = 2;
}

CarMaker.SUV = function () {
  this.doors = 24;
}


console.log(CarMaker['factory'])
var corolla = CarMaker.factory('Compact');
console.log(corolla.drive());