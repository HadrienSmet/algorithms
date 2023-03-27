import { useEffect } from "react";
import { findBestBenefits } from "./functions/benefits/findBest/findBest";
import { findClosestEnemy } from "./functions/enemies/closestOnMap/closestOnMap";
import { findClosestOnGraph } from "./functions/enemies/closestOnGraph/closestOnGraph";
import { findClosestToZero } from "./functions/degrees/closestToZero/closestToZero";
import { findBiggestArea } from "./functions/areas/biggestArea/biggestArea";
import { findTheHottest } from "./functions/degrees/farenheitCelsius/findTheHottest";
import { isAnagram } from "./functions/strings/isAnagram/isAnagram";
import { isPalindrom } from "./functions/strings/isPalindrom/isPalindrom";

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
    const shapesExample = [3, 4, 1, 9, 8, 6, 7];
    const celsiusExample = 0;
    const fahrenheitExample = 32;
    const word1 = "trace";
    const word2 = "ecart";

    useEffect(() => {
        isPalindrom(word1, word2);
    }, []);

    return (
        <div className="App">
            <h1>Open your consol</h1>
        </div>
    );
}

export default App;
