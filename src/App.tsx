import React, {useEffect, useState} from 'react';
import './App.css';
import {Order} from "./Context/InputValueContext";
import FilterBox from "./Components/Filter/FilterBox";

function App() {
    const [results, setResults] = useState<string[]>([]);

    useEffect(() =>{

    }, [results])

    return (
        <div className="container">
            <FilterBox order={Order.Descending} page={5} search={"test"} resultsPerPage={10} options={['test1', 'test2', 'test3']} result={(data) => setResults(data)}>
                <h2>Results</h2>
                {
                    results.map((value, index) =>{
                        return <div className="card-info">{value}</div>
                    })
                }
            </FilterBox>
        </div>
    );
}

export default App;
