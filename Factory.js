function Factory () {
    this.createEmployee = (type) => {
        let employee 

        if(type === 'fulltime')
            employee = new FullTime()
        if(type === 'parttime')
            employee = new PartTime()
        if(type === 'contractor')
            employee = new Contractor()

        employee.type = type

        employee.say = function () { log.add(this.type + ': rate ' + this.hourly + '/hour') }

        return employee
    } 
}

function FullTime () { this.hourly = '$12' }
function PartTime () { this.hourly = '$10' }
function Contractor () { this.hourly = '$8' }

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
    let employees = []

    let factory = new Factory()

    employees.push(factory.createEmployee("fulltime"))
    employees.push(factory.createEmployee("parttime"))
    employees.push(factory.createEmployee("contractor"))

    for(let i=0;i<employees.length;i++)
        employees[i].say()

    log.show()
}

