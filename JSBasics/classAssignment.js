class Car {
    #speed= 0;
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate(speed) {
       /* let temp  = this.speed + speed
        if(temp>140){
          console.log(`Speed is more than sped limit`)
        }
        this.speed = this.speed + speed
        console.log(`Acclerated Speed of ${this.make} is ${this.speed}`)*/
        this.speed = this.speed + 10
        console.log(`Acclerated Speed of ${this.make} is ${this.speed}`)
    }

    get speed(){
        return this.#speed;
    }

    set speed(speed){
        if ( speed <= 140){
            this.#speed = speed;
        }
    }

    brake(deceleration) {
        this.speed = this.speed - deceleration;
        console.log(`Speed of ${this.make} when applied break is ${this.speed}`)
    }
}

class ElectricCar extends Car{
    #batteryLife = 0
    constructor(make, speed, batteryLife) {
        super(make, speed)
        this.batteryLife = batteryLife
    }

    charging(){
        console.log("The car is currently charging")
    }

    accelerate(){
        this.speed = this.speed + 8
        console.log(`Acclerated Speed of ${this.make} is ${this.speed} and battey life is ${this.batteryLife}`)
    }

    get batteryLife(){
        return this.#batteryLife;
    }

    set batteryLife(batteryLife){
        if( batteryLife <= 5){
            this.#batteryLife = batteryLife
        }
        else{
            console.log("Invalid")
        }
    }
};

let bmw = new ElectricCar("BMW", 120, 4);
let mercedes = new ElectricCar("Mercedes", 95, 6);
let toyota = new Car("Toyota", 80)

bmw.accelerate()
bmw.brake(5)
mercedes.accelerate()
mercedes.brake(5)
console.log(bmw.speed)
toyota.accelerate()
toyota.brake(5)
console.log(toyota.speed)

//bmw.speed = 4000;
//console.log(bmw.speed)

/* # is used to define provate variable in Javascript. Making sure that outside stuffs don't affect variables or methods is called Encapsulation*/

// get and set method in Javascript, Example get speed(), set speed(). In these method use _salary instead of #salary.