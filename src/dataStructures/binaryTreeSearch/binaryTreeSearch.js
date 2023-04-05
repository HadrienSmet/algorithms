class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

export class BinaryTreeSearch {
    constructor() {
        this.root = null;
    }
    add(data) {
        const node = new Node(data);
        if (this.root === null) {
            this.root = node;
            return this.root;
        }

        let current = this.root;
        while (current) {
            if (data === current.data) return null;
            if (data < current.data) {
                if (current.left === null) {
                    current.left = node;
                    return current.left;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = node;
                    return current.right;
                }
                current = current.right;
            }
        }
    }
    find(data) {
        if (this.root === null) return null;
        let current = this.root;
        let found = false;
        while (current && !found) {
            if (data < current.data) {
                current = current.left;
            } else if (data > current.data) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if (!found) return false;
        return current;
    }
}
