import { BinaryTreeSearch } from "./binaryTreeSearch";

describe("data structures - binary tree search", () => {
    describe("with the right data", () => {
        test("add and find methods", () => {
            const bts = new BinaryTreeSearch();
            bts.add(50);
            bts.add(75);
            bts.add(25);
            bts.add(12);
            bts.add(88);
            bts.add(18);

            expect(bts.find(12).data).toBe(12);
            expect(bts.find(24)).toBe(false);
        });
    });
});
