function Shop () {
    this.contruct = function (builder) {
        builder.step1()
        builder.step2()

        return builder.get()
    }
}

function CarBuilder () {
    this.car = null

    this.step1 = function () {
        this.car = new Car()
    }

    this.step2 = function () {
        this.car.addParts()
    }

    this.get = function () {
        return this.car
    }
}

function TruckBuilder() {
    this.truck = null
 
    this.step1 = function() {
        this.truck = new Truck()
    }
 
    this.step2 = function() {
        this.truck.addParts()
    }
 
    this.get = function() {
        return this.truck
    }
}

function Car() {
    this.doors = 0
 
    this.addParts = function() {
        this.doors = 4
    }
 
    this.say = function() {
        log.add("I am a " + this.doors + "-door car")
    }
}
 
function Truck() {
    this.doors = 0
 
    this.addParts = function() {
        this.doors = 2
    }
 
    this.say = function() {
        log.add("I am a " + this.doors + "-door truck")
    }
}

const log = (function() {
    let log = ''

    return {
        add: (msg) => { log += msg + '\n' },
        show: () => {
            alert(log)
            log = ''
        }
    }
})()

const run = () => {
    let shop = new Shop()
    let carBuilder = new CarBuilder()
    let truckBuilder = new TruckBuilder()
    let car = shop.contruct(carBuilder)
    let truck = shop.contruct(truckBuilder)

    car.say()
    truck.say()

    log.show()
}