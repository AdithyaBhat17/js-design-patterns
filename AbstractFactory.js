function Employee (name) {
    this.name = name

    this.say = function () {
        log.add('I am employee ' + name)
    }
}

function Vendor (name) {
    this.name = name

    this.say = function () {
        log.add('I am vendor ' + name)
    }
}

function EmployeeFactory () {
    this.create = function (name) {
        return new Employee(name)
    }
}

function VendorFactory () {
    this.create = function (name) {
        return new Vendor(name)
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
    let persons = []

    let employeeFactory = new EmployeeFactory()
    let vendorFactory = new VendorFactory()

    persons.push(employeeFactory.create('Adithya NR'))
    persons.push(employeeFactory.create('Bapusaheb Patil'))
    persons.push(vendorFactory.create('Ankush Lakkanna'))
    persons.push(vendorFactory.create('Arjun Mahesh'))

    for(let i=0; i < persons.length; i++)
        persons[i].say()

    log.show()
}