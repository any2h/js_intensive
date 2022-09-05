class Queue {
    constructor() {
        this.items = []
    }

    enqueue(item) {
        return this.items.push(item)
    }

    dequeue() {
        return this.items.shift()
    }

    front() {
        if (this.isEmpty()) {
            return 'No items in Queue'
        }

        return this.items[0]
    }

    isEmpty() {
        return this.items.length === 0
    }

    size() {
        return this.items.length
    }
}
