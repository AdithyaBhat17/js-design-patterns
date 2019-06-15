// Observers
function Click () {
    this.handlers = []
}

Click.prototype = {
    subscribe: function (func) {
        this.handlers.push(func)
    },
    unsubscribe: function (func) {
        this.handlers = this.handlers.filter ((item) => item !== func && item)
    },
    fire: function(o, obj) {
        let scope = obj || window

        this.handlers.forEach((item) => item.call(scope, o))
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
    let clickHandler = (item) => log.add('fired ' + item)

    let click = new Click()
    click.subscribe(clickHandler)
    click.fire('event #1')
    click.unsubscribe(clickHandler)
    click.fire('event #2')
    click.subscribe(clickHandler)
    click.fire('event #3')

    log.show()
}