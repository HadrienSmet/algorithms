import { useEffect } from "react";
import { findBestBenefits } from "./functions/benefits/findBest/findBest";
import { findClosestEnemy } from "./functions/enemies/closestOnMap/closestOnMap";
import { findClosestOnGraph } from "./functions/enemies/closestOnGraph/closestOnGraph";

function App() {
    // const benefitsArray = [10, 12, 18, 6, 7, 9, 13, 15];
    const benefitslessArray = [10, 10, 10, 10, 10, 10, 10, 10, 10];
    const example = ["0030", "0000", "0000", "0000"];
    const current = {
        x: 10,
        y: -5,
    };
    const enemiesPos = [
        {
            id: "Jhon",
            x: -3,
            y: 1,
        },
        {
            id: "Mike",
            x: 9,
            y: -6,
        },
        {
            id: "Jake",
            x: 0,
            y: -4,
        },
    ];

    useEffect(() => {
        findClosestOnGraph(current, enemiesPos);
    }, []);

    return (
        <div className="App">
            <h1>Open your consol</h1>
        </div>
    );
}

export default App;
