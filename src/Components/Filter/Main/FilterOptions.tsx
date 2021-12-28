import {FormEvent, useContext, useState} from "react";
import {InputValueContext, Order} from "../../../Context/InputValueContext";

interface Props{
    toggle: () => void;
}

function FilterOptions({toggle}: Props){
    const {state, dispatch} = useContext(InputValueContext);

    const [search, setSearch] = useState(state.search);
    const [resultsPerPage, setResultsPerPage] = useState(state.resultsPerPage);
    const [order, setOrder] = useState(state.order);
    const [options, setOption] = useState(state.options);

    function renderOptions() {
        return Array.from(state.options).map((key, index) => {
            return (
                <option value={index}>{key}</option>
            )
        });
    }

    const onSubmit = (e : FormEvent) => {
        e.preventDefault();

        dispatch({type: "SET_SEARCH", payload: search});
        dispatch({type: "SET_ORDER", payload: order});

        toggle();
    }

    return(
        <form onSubmit={onSubmit}>
            <div className="content-filter-box filter-background-box">
                <div className="row">
                    <div className="column">
                        <div className="column filter-input-background">
                            <div className="filter-text">
                                Select filter option
                            </div>
                            <select className="content-filter-select" name="Option" id="Option">
                                {renderOptions()}
                            </select>
                        </div>
                    </div>

                    <div className="column">
                        <div className="column filter-input-background">
                            <div className="filter-text">
                                Results per page
                            </div>
                            <select className="content-filter-select" name="ResultsPerPage" id="ResultsPerPage"  value={resultsPerPage}
                                    onChange={(e) => {
                                        setResultsPerPage(parseInt(e.target.value));
                                    }}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7" selected>7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </div>
                    </div>

                    <div className="column">
                        <div className="column filter-input-background">
                            <div className="filter-text">
                                Filter order {order}
                            </div>
                            <select id="filterOrder" className="content-filter-select" name="Order" value={order}
                                    onChange={(e) => {
                                        if(e.target.value == 'Descending'){
                                            setOrder(Order.Descending);
                                        }else{
                                            setOrder(Order.Ascending);
                                        }
                                    }}>
                                {order == Order.Descending ?
                                    <>
                                        <option value="Descending" selected>Descending</option>
                                        <option value="Ascending">Ascending</option>
                                    </>:
                                    <>
                                        <option value="Ascending" selected>Ascending</option>
                                        <option value="Descending">Descending</option>
                                    </>}
                            </select>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="column filter-input-background">
                        <div className="filter-text">
                            Search
                        </div>
                        <input className="user-input-text"
                               id="search"
                               type="text"
                               name="Search"
                               placeholder="Search"
                               value={search}
                               onChange={(e) => setSearch(e.target.value)}/>
                    </div>
                </div>

                <button className="button-style-1" type="submit" name="filter_button" value="GO">Filter</button>
            </div>
        </form>
    )
}
export default FilterOptions;