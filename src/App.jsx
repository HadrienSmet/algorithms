import { useEffect } from "react";
import { putSomeSpaces } from "./functions/strings/putSomeSpaces/putSomeSpaces";
import { LinkedList } from "./utils/linkedList";

function App() {
    const firstString = "Leroidespiratesceseramoi";
    const scdString = "pirates sera le moi ce roi des";
    const myLinkedList = new LinkedList();

    myLinkedList.insertFirst(100);
    myLinkedList.insertFirst(200);
    myLinkedList.insertLast(1000);
    myLinkedList.insertAt(600, 1);
    myLinkedList.printListData();

    useEffect(() => {
        putSomeSpaces(firstString, scdString);
    }, []);

    return (
        <div className="App">
            <h1>Open your consol</h1>
        </div>
    );
}

export default App;
