const Singleton = (() => {
    let instance

    createInstance = () => {
        const object = new Object('Instance')
        return object
    }

    return {
        getInstance: () => {
            if(!instance)
                instance = createInstance()
            return instance
        }
    }
})()

const run = () => {
    const instance1 = Singleton.getInstance()
    const instance2 = Singleton.getInstance()

    alert("Are these two instances the same? " + (instance1 === instance2))
}