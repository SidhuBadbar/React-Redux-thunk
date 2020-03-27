import React from 'react';
import TodoItems from '../TodoItems'
import './todolist.css'

export default function TodoList({items, loader}){
    return(
        <div className="loaderOuter" style={{position: 'relative'}}>
            {
                loader && <div className="loader">Loading...</div>
            }
            {
                items && items.map(ac => {
                    return <TodoItems key={ac} item={ac} />
                })
            }
        </div>
    )
}