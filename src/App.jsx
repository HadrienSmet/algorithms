import { useEffect } from "react";
import { findBestBenefits } from "./functions/benefits/findBest/findBest";
import { findClosestEnemy } from "./functions/enemies/closestOnMap/closestOnMap";
import { findClosestOnGraph } from "./functions/enemies/closestOnGraph/closestOnGraph";
import { findClosestToZero } from "./functions/degrees/closestToZero/closestToZero";

function App() {
    // const benefitsArray = [10, 12, 18, 6, 7, 9, 13, 15];
    const benefitslessArray = [10, 10, 10, 10, 10, 10, 10, 10, 10];
    const example = ["0030", "0000", "0000", "0000"];
    const current = {
        x: 10,
        y: -5,
    };
    const enemiesPos =
        "Y en a un vers le Mordor et un autre en Russie, il aime pas les Ukrainiens";
    const temperatureExample = [-9, 5, 24, 29, 8, -2, 7, 2];

    useEffect(() => {
        findClosestToZero(temperatureExample);
    }, []);

    return (
        <div className="App">
            <h1>Open your consol</h1>
        </div>
    );
}

export default App;
