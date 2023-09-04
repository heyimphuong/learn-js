function crateCounter() {
    let counter = 0

    function increase() {
        return ++counter
    }

    return increase
}

const counter1 = crateCounter()

console.log(counter1())
