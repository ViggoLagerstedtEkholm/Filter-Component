import {useContext} from "react";
import {InputValueContext} from "../../../Context/InputValueContext";

function FilterInfo(){
    const {state} = useContext(InputValueContext);

    return(
        <div className="search-terms-container">
            <h1>Search terms</h1>
            <ul>
                <li>
                    <p><b>Filter order:</b> {state.order}</p>
                </li>

                <li>
                    <p><b>Search:</b> {state.search}</p>
                </li>

                <li>
                    <p><b>Results per page:</b> {state.resultsPerPage}</p>
                </li>

                <li>
                    <p><b>Page:</b> {state.page}</p>
                </li>
            </ul>
        </div>
    )
}

export default FilterInfo;