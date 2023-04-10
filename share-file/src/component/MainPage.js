import React from 'react';
import { Link } from 'react-router-dom';


export const MainPage = () =>{
    return(
        <div>
            <Link to='sendpage'><button>SEND</button></Link>
            <Link to='recivepage'><button>RECEIVE</button></Link>

        </div>
    )
}