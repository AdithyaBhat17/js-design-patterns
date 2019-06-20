function User (name) {
    this.name = name

    this.say = function () {
        log.add('Username: ' + this.name)
    }
}

function DecoratedUser(user, street, city) {
    this.user = user
    this.name = user.name
    this.street = street
    this.city = city

    this.say = function () {
        log.add('Decorated User: ' + this.name + ', ' + this.street + ', ' + this.city)
    }
}

const log = (() => {
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
    let user = new User('Adithya')
    user.say()

    let decoratedUser = new DecoratedUser(user, 'Jayanagar', 'Bangalore')
    decoratedUser.say()

    log.show()
}