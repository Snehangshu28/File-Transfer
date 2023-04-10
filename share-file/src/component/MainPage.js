import React from 'react';
import "./MainPage.css";
import { Link } from 'react-router-dom';


export const MainPage = () =>{
    return(
        <div className='main-b'>
            <Link to='sendpage'><button className='btn-s'>SEND</button></Link>
            <Link to='recivepage'><button className='btn-r'>RECEIVE</button></Link>

        </div>
    )
}