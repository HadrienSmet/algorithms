import { useEffect } from "react";
import { findBestBenefits } from "./functions/benefits/findBest/findBest";
import { findClosestEnemy } from "./functions/enemies/closestOnMap/closestOnMap";

function App() {
    // const benefitsArray = [10, 12, 18, 6, 7, 9, 13, 15];
    const benefitslessArray = [10, 10, 10, 10, 10, 10, 10, 10, 10];
    const example = ["0030", "0000", "0000", "0000"];

    useEffect(() => {
        findClosestEnemy(example);
    }, []);

    return (
        <div className="App">
            <h1>Open your consol</h1>
        </div>
    );
}

export default App;
