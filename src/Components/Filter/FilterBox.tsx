import React, {ReactNode, useEffect} from "react";
import FilterConfigurationBox from "./Main/FilterConfigurationBox";
import Pagination from "./Pagination/Pagination";
import {InputValueProvider, Order} from "../../Context/InputValueContext";
import {Filter} from '../../Context/InputValueContext';

interface Props{
    page: number;
    order: Order;
    search:string
    resultsPerPage: number;
    options: string[];
    children: ReactNode;
    result: (result : string[]) => void;
}

function FilterBox(filter: Props) {
    const results = ['test1', 'test2', 'test3'];

    useEffect(() =>{
        filter.result(results);
    }, [])

    return (
        <InputValueProvider filter={filter}>
            <FilterConfigurationBox/>
                <div className="display-result-box">
                    {filter.children}
                </div>
            <Pagination/>
        </InputValueProvider>
    )
}

export default FilterBox;
