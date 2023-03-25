import { useEffect } from "react";
import { findBestBenefits } from "./functions/benefits/findBest/findBest";
import { findClosestEnemy } from "./functions/enemies/closestOnMap/closestOnMap";
import { findClosestOnGraph } from "./functions/enemies/closestOnGraph/closestOnGraph";

function App() {
    // const benefitsArray = [10, 12, 18, 6, 7, 9, 13, 15];
    const benefitslessArray = [10, 10, 10, 10, 10, 10, 10, 10, 10];
    const example = ["0030", "0000", "0000", "0000"];
    const current = {
        x: 20,
        y: 20,
    };
    const enemiesPos = [
        {
            id: 0,
            x: 5,
            y: 1,
        },
        {
            id: 1,
            x: 45,
            y: 60,
        },
        {
            id: 2,
            x: 50,
            y: 40,
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
