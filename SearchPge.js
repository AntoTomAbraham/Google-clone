import React from 'react';
import './SearchPge.css';
import {useStateValue} from "../StateProvider";
import useGoogleSearch from '../useGoogleSearch';
function SearchPge() {
    const [{ term },dispatch] =useStateValue();
    const {data} = useGoogleSearch(term);
    console.log(data)
    return (
        <div className='searchpage'>
           <div className="searchpage_header">
    <h1>{term}</h1>
               </div> 
               <div className="searchpage_results">
               </div> 
        </div>
    )
}

export default SearchPge
