import { LinkedList } from "./linkedList";

describe("dataStructures/linkedList", () => {
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
});
