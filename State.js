let TrafficLight = function () {
    let count = 0
    let currentState = new Red(this)

    this.change = (state) => {
        if(count++ >= 10) return // limit changes
        currentState = state
        currentState.go()
    }

    this.start = () => currentState.go()
}

const Red = function(light) {
    this.light = light

    this.go = () => {
        log.add('Red --> for 1 minute')
        light.change(new Yellow(light))
    }
}

const Yellow = function(light) {
    this.light = light

    this.go = () => {
        log.add('Yellow --> for 10 seconds')
        light.change(new Green(light))
    }
}

const Green = function(light) {
    this.light = light

    this.go = () => {
        log.add('Green --> for 1 minute')
        light.change(new Red(light))
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
    let light = new TrafficLight()
    light.start()

    log.show()
}
