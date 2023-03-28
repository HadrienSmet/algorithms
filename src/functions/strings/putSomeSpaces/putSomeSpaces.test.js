import { putSomeSpaces } from "./putSomeSpaces";

test("Put some spaces to my text: first regular case", () => {
    const firstString = "leroidespiratesceseramoi";
    const scdString = "pirates sera le moi ce roi des";
    expect(putSomeSpaces(firstString, scdString)).toEqual(
        "le roi des pirates ce sera moi"
    );
});

test("Put some spaces to my text: second regular case", () => {
    const firstString = "Leroidespiratesceseramoi,MonkeyDLuffy";
    const scdString = "Monkey pirates sera Luffy Le moi, ce roi des D";
    expect(putSomeSpaces(firstString, scdString)).toEqual(
        "Le roi des pirates ce sera moi, Monkey D Luffy"
    );
});

test("Put some spaces to my text: wrong data case", () => {
    const firstString = true;
    const scdString = "Monkey pirates sera Luffy Le moi, ce roi des D";
    expect(putSomeSpaces(firstString, scdString)).toEqual(
        "Wrong data. Expecting a couple of strings as arguments"
    );
});
