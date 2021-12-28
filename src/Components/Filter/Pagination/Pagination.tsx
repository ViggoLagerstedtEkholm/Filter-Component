import React, {FormEvent, useContext, useState} from "react";
import {InputValueContext} from "../../../Context/InputValueContext";

function PaginationBox() {
    const [goToPageNumber, setGoToPageNumber] = useState(1);
    const {state, dispatch} = useContext(InputValueContext);
    const page = state.page;

    const totalPages = 10;

    const nextPage = (e: FormEvent) =>{
        e.preventDefault();
        dispatch({type: "PAGE_INCREMENT"})
    }

    const previousPage = (e: FormEvent) =>{
        e.preventDefault();
        dispatch({type: "PAGE_DECREMENT"})
    }

    const goToPage = (e: FormEvent, pageNumber: number) =>{
        e.preventDefault();
        if(page > 1 && page < totalPages){
            dispatch({type: "SET_PAGE", payload: pageNumber});
        }else{
            dispatch({type: "SET_PAGE", payload: 1});
            alert('Page number exceeded.');
        }
    }

    return (
        <div className="content-pagination">
            {totalPages > 1 ?
                <div>
                    <div className="content-pagination-bar">
                        <div>
                            {page > 1 ? <form onSubmit={previousPage}>
                                <button type="submit" className="pagination-button">🡸</button>
                            </form>: null}

                        </div>
                        <div>
                            {page <= totalPages - 1 ? <form onSubmit={nextPage}>
                                <button type="submit" className="pagination-button">🡺</button>
                            </form>: null}

                        </div>
                    </div>

                    <input className="user-input-text" placeholder="PAGE INDEX" required type="number"
                           value={goToPageNumber}
                           onChange={e => {
                               const number = parseInt(e.target.value);
                               setGoToPageNumber(number);
                               goToPage(e, number);
                           }}/>

                    <input className="button-style-4" type="submit" value="Go to page"/>

                </div>: null
            }
        </div>
    );
}

export default PaginationBox;
