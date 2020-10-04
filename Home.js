import React from 'react';
import './Home.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import Search from './Search';
function Home() {
    return (
        <div className='home'>
            <div className="home_header">
                <div className="home_headerleft">
                    <Link to='/about'>About</Link>
                    <Link to='/store'>Store</Link>
                </div>
                <div className="home_headerright">
                <Link to='/gmail'>Gmail</Link>
                <Link to='/images'>Images</Link>
                <AppsIcon />
                <Avatar />
                    </div>
            </div>
            <div className="home_body">
                <img src="https://www.google.co.in/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" 
                alt=""/>
                <div className="homeinputcontainer">
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default Home
