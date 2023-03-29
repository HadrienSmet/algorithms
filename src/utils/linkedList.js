class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

export class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Insert first Node
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }
    // Insert last Node
    insertLast(data) {
        let node = new Node(data);
        let current;
        if (!this.head) {
            this.head = node;
        } else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }

        this.size++;
    }
    // Insert Node at index
    insertAt(data, index) {
        if (index > 0 && index > this.size) {
            return;
        }
        if (index === 0) {
            this.insertFirst(data, this.head);
            return;
        }

        const node = new Node(data);
        let current, previous;

        current = this.head;
        let count = 0;

        while (count < index) {
            previous = current;
            count++;
            current = current.next;
        }

        node.next = current;
        previous.next = node;

        this.size++;
    }
    // Get Node at index
    getAt(index) {
        let current = this.head;
        let count = 0;

        while (current) {
            if (count == index) {
            }
            count++;
            current = current.next;
        }
        return null;
    }

    // Remove Node at index
    removeAt() {
        if (index > 0 && index > myLinkedList.size) {
            return;
        }
        let current = this.head;
        let previous;
        let count = 0;

        if (index === 0) {
            this.head = current.next;
        } else {
            while (count < index) {
                count++;
                previous = current;
                current = current.next;
            }

            previous.next = current.next;
        }

        this.size--;
    }

    // Clear list
    clearList() {
        this.head = null;
        this.size = 0;
    }
    // Print list data
    printListData() {
        let current = this.head;

        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}
