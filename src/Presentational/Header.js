import React from 'react';

import { Link } from 'react-router-dom'

const Header = ({items}) => {
    return (
        <div className="navlink">
            <div>
                {
                    items.map( ac => <Link key={ac.id} to={ac.path}>{ac.id}</Link>)
                }
            </div>
            <h1 style={{textAlign: 'center'}}>To Do List:-</h1>
            <div>Logout</div>
        </div>
    )
};

export default Header;