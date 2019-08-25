// old interface.

function Shipping () {
    this.request = function (source, destination, weight) {
        return '$50.00'
    }
}

// new refactored interface 

function AdvancedShipping () {
    this.login = function(credentials) { }
    this.setSource = function(source) { }
    this.setDestination = function(destination) { }
    this.calculate = function(weight) { return '$40.00' }
}

// adapter interface

function ShippingAdapter (credentials) {
    let shipping = new AdvancedShipping()

    shipping.login(credentials)

    return {
        request: function (source, destination, weight) {
            shipping.setSource(source)
            shipping.setDestination(destination)
            return shipping.calculate(weight)
        }
    }
}

let log = (() => {
    let log = ''
    return {
        add: (msg) => {
            log += msg + '\n'
        },
        show: () => { 
            alert(log)
            log = ''
        }
    }
})()

function run () {
    let shipping = new Shipping()
    let credentials = { token: '23qw3213a'}
    let adapter = new ShippingAdapter(credentials)

    // prev shipping object and inteface
    let cost = shipping.request('2132131', '2131313', '20 lbs')
    log.add('Old cost: ' + cost)

    // new obj and interface.
    cost = adapter.request('2132131', '2131313', '20 lbs')
    log.add('New cost: ' + cost)
    
    log.show()
}