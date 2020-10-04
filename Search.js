import React ,{useState} from 'react'
import {useStateValue} from '../StateProvider';
import './Search.css'
import { actionTypes } from '../reducer';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
function Search({hideButtons = false}) {
    const [{},dispatch] =useStateValue();
    const [input, setInput] = useState("");
    const history=useHistory();

    const search = (e) => {
        e.preventDefault();
        console.log('you hits search')
        dispatch({
            type:actionTypes.SET_SEARCH_TERM,
            term:input,
        })
        history.push('/search')
    };

    return (
        <form className='search'>
        <div className='search'>
            <div className="searchinput">
                <SearchIcon className='search_inputIcon'/>
                <input value={input} onChange={e => setInput(e.target.value)} />
                <MicIcon />
                </div>
                {hideButtons ?(
            
            <div className="search_buttons">
            <Button type='submit' onClick={search} variant='outlined'>Google Search</Button>
                <Button variant='outlined'>I'm Feeling Lucky</Button>
               
            </div>):(
            <div className="search_buttons">
            <Button className="search_buttonshidden" type='submit' onClick={search} variant='outlined'>Google Search</Button>
                <Button className="search_buttonshidden" variant='outlined'>I'm Feeling Lucky</Button>
               
            </div>)}
            
        </div>
        </form>
    )
}

export default Search
