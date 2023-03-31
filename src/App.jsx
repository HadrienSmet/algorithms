import { useEffect } from "react";
import { twoSum } from "./functions/array/twoSum/twoSum";

function App() {
    const nums = [2, 3, 4];

    useEffect(() => {
        twoSum(nums, 6);
    }, []);

    return (
        <div className="App">
            <h1>Open your consol</h1>
        </div>
    );
}

export default App;
