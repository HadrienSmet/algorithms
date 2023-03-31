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
    // Get Node at index
    getAt(index) {
        if (index < 0 || index >= this.size) return null;

        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }
    // Insert Node at index
    insertAt(data, index) {
        if (index === 0) return this.insertFirst(data);

        const prevNode = this.getAt(index - 1);
        if (prevNode === null) return null;

        prevNode.next = new Node(data, prevNode.next);
        this.size++;
    }

    // Remove Node at index
    removeAt(index) {
        if (index < 0 || index > this.size) {
            return null;
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
        let output = "";
        let current = this.head;

        while (current) {
            output = `${output}${current.data} -> `;
            current = current.next;
        }
        console.log(output);
    }
}

LinkedList.fromValues = function (...values) {
    const ll = new LinkedList();
    for (let i = values.length - 1; i >= 0; i--) {
        ll.insertFirst(values[i]);
    }
    return ll;
};
