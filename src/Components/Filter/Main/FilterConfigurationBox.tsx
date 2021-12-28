import {useContext, useState} from "react";
import {InputValueContext} from "../../../Context/InputValueContext";
import FilterOptions from "./FilterOptions";
import FilterInfo from "./FilterInfo";

function FilterConfigurationBox() {
    const {state} = useContext(InputValueContext);
    const [showFilterBoxState, setShowFilterBoxState] = useState(state.showFilter);

    const toggle = () => {
        if (showFilterBoxState) {
            setShowFilterBoxState(false);
        } else {
            setShowFilterBoxState(true);
        }
    }

    return (
        <div>
            <button className="button-style-4" onClick={toggle}> Toggle filtering.</button>
            {showFilterBoxState ? <FilterOptions toggle={toggle}/> : <FilterInfo/>}
        </div>
    );
}

export default FilterConfigurationBox;