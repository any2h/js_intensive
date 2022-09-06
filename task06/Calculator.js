class Calculator {
    #x
    #y

    constructor(x, y) {
        if (typeof x !== 'number' || typeof y !== 'number') {
            throw new Error('enter valid number')
        }

        this.#x = x
        this.#y = y
    }

    setX(num) {
        if (typeof num !== 'number') {
            throw new Error('must be a number')
        }

        this.#x = num
    }

    setY(num) {
        if (typeof num !== 'number') {
            throw new Error('must be a number')
        }

        this.#y = num
    }

    logSum() {
        console.log((this.#x + this.#y).toFixed(2)) 
    }

    logMul() {
        console.log((this.#x * this.#y).toFixed(2)) 
    }

    logSub() {
        console.log((this.#x - this.#y).toFixed(2))
    }

    logDiv() {
        console.log(this.#y === 0 ? new Error('y is 0') : (this.#x / this.#y).toFixed(2)) 
    }
}
