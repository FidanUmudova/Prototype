//1
function Vehicle(brand , year){
    this.brand=brand;
    this.year=year;
}
//2
Vehicle.prototype.getInfo = function(){
    return `brand: ${this.brand}, year: ${this.year}`;
}
//3
function Car(brand,year,fuelType){
    Vehicle.call(this,brand,year)
    this.fuelType=fuelType;
}
//4
Car.prototype=Object.create(Vehicle.prototype);
Car.prototype.constructor=Car;
//5
Car.prototype.getInfo= function(){
    return `brand: ${this.brand}, year: ${this.year} , fuelType: ${this.fuelType}`;
}
//6
const myCar = new Car('Mercedes', 2022, 'Electric');
console.log(myCar.getInfo()); 