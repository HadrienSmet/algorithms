import { useEffect } from "react";
import { putSomeSpaces } from "./functions/strings/putSomeSpaces/putSomeSpaces";

function App() {
    const firstString = "Leroidespiratesceseramoi";
    const scdString = "pirates sera le moi ce roi des";

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
