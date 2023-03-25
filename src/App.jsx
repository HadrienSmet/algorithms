import { useEffect } from "react";
import { findBestBenefits } from "./functions/benefits/findBest/findBest";

function App() {
    // const benefitsArray = [10, 12, 18, 6, 7, 9, 13, 15];
    const benefitslessArray = [10, 10, 10, 10, 10, 10, 10, 10, 10];

    useEffect(() => {
        console.log("hello world");
        // findBestBenefits(benefitsArray);
        findBestBenefits(benefitslessArray);
    }, []);

    return (
        <div className="App">
            <h1>Open your consol</h1>
        </div>
    );
}

export default App;
