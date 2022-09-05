class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }

    // Добавление элемента в конец списка
    add(value) {
        let node = new Node(value)
        let curr;

        if (this.head === null) {
            this.head = node
        } else {
            curr = this.head

            while (curr.next) {
                curr = curr.next
            }

            curr.next = node
        }

        this.length++
    }

    // Добавление элемента по индексу
    addAt(value, index) {
        if (index < 0 || index > this.length) {
            return null
        }

        let node = new Node(value)
        let curr, prev

        curr = this.head

        if (index === 0) {
            node.next = this.head
            this.head = node
        } else {
            curr = this.head
            let i = 0

            while (i < index) {
                prev = curr
                curr = curr.next
                i++
            }

            node.next = curr
            prev.next = node
        }

        this.length++
    }

    // Удаление элемента по индексу
    removeAt(index) {
        if (index < 0 || index >= this.length) {
            return null
        }

        let curr, prev, i = 0
        curr = this.head
        prev = curr

        if (index === 0) {
            this.head = curr.next
        } else {
            while (i < index) {
                prev = curr
                curr = curr.next
                i++
            }

            prev.next = curr.next
        }

        this.length--
        return curr.value
    }

    // Удаление элемента
    remove(value) {
        let curr = this.head
        let prev = null
        
        while (curr !== null) {
            if (curr.value === value) {
                if (prev === null) {
                    this.head = curr.next
                } else {
                    prev.next = curr.next
                }

                this.length--
                return curr.value
            }

            prev = curr
            curr = curr.next
        }

        return -1
    }

    // Получение элемента по индексу
    elementAt(index) {
        if (index < 0 || index > this.length) {
            return null
        }

        let curr = this.head
        let i = 0

        while (i < index) {
            curr = curr.next
            i++
        }
    }

    // Поиск индекса
    indexOf(value) {
        let i = 0
        let curr = this.head

        while (curr !== null) {
            if (curr.value === value) {
                return i
            }

            curr = curr.next
            i++
        }

        return -1
    }

    isEmpty() {
        return this.length === 0
    }

    size() {
        return this.length
    }
}
