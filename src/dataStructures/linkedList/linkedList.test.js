import { LinkedList } from "./linkedList";

describe("dataStructures - linkedList", () => {
    describe("#insertFirst", () => {
        test("it adds the element on the top of the list", () => {
            const ll = new LinkedList();
            ll.insertFirst(10);
            const oldHead = ll.head;
            ll.insertFirst(20);

            expect(ll.head.data).toBe(20);
            expect(ll.head.next).toBe(oldHead);
            expect(ll.size).toBe(2);
        });
    });
    describe("#insertLast", () => {
        test("it adds the element at the end of the list", () => {
            const ll = LinkedList.fromValues(20, 30, 40, 50);
            ll.insertLast(10);
            expect(ll.size).toBe(5);
        });
    });
    describe("#insertAt", () => {
        describe("with the right data", () => {
            test("insert at the head", () => {
                const ll = LinkedList.fromValues(10, 20);
                ll.insertAt(30, 0);

                expect(ll.head.data).toBe(30);
                expect(ll.head.next.data).toBe(10);
                expect(ll.size).toBe(3);
            });
            test("insert at the given index", () => {
                const ll = LinkedList.fromValues(10, 20, 30, 40);
                ll.insertAt(50, 2);

                const node = ll.getAt(2);
                expect(node.data).toBe(50);
                expect(node.next.data).toBe(30);
                expect(ll.size).toBe(5);
            });
        });
        describe("with wrong data", () => {
            test("it returns null if the index is less than 0", () => {
                const ll = LinkedList.fromValues(10, 20, 30, 40, 50);
                ll.insertAt(60, -1);
                expect(ll.size).toBe(5);
            });
            test("it returns null if the index is greater than the size of the list", () => {
                const ll = LinkedList.fromValues(10, 20, 30, 40, 50);
                ll.insertAt(60, 9);
                expect(ll.size).toBe(5);
            });
        });
    });
    describe("#getAt", () => {
        describe("with index less than 0", () => {
            test("it returns null", () => {
                const ll = LinkedList.fromValues(10, 20);

                expect(ll.getAt(-1)).toBeNull();
            });
        });
        describe("with index out of range", () => {
            test("it returns null", () => {
                const ll = LinkedList.fromValues(10, 20);

                expect(ll.getAt(10)).toBeNull();
            });
        });
        describe("with index 0", () => {
            test("it returns the head of the linked list", () => {
                const ll = LinkedList.fromValues(10, 20);

                expect(ll.getAt(0).data).toBe(10);
            });
        });
        describe("with random index within range", () => {
            test("it returns the right element", () => {
                const ll = LinkedList.fromValues(10, 20, 30, 40, 50);

                expect(ll.getAt(2).data).toBe(30);
            });
        });
    });
    describe("#removeAt", () => {
        describe("with the right data", () => {
            test("removes the head with an index of 0", () => {
                const ll = LinkedList.fromValues(10, 20, 30);
                ll.removeAt(0);

                expect(ll.head.data).toBe(20);
                expect(ll.head.next.data).toBe(30);
                expect(ll.size).toBe(2);
            });
            test("removes the node at the given index", () => {
                const ll = LinkedList.fromValues(10, 20, 30, 40, 50);
                ll.removeAt(2);
                const node = ll.getAt(2);
                expect(node.data).toBe(40);
                expect(node.next.data).toBe(50);
                expect(ll.size).toBe(4);
            });
        });
        describe("with wrong data", () => {
            test("it returns null with a negative index", () => {
                const ll = LinkedList.fromValues(10, 20, 30);
                ll.removeAt(-1);
                expect(ll.size).toBe(3);
            });
            test("it returns null with an index greater than the linked list's size", () => {
                const ll = LinkedList.fromValues(10, 20, 30);
                ll.removeAt(6);
                expect(ll.size).toBe(3);
            });
        });
    });
});
