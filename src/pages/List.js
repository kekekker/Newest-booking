import React, { useState, useEffect } from 'react'
import Room from '../components/roomCard.js'

const List = () => {
    const [items, setItems] = useState([])
    
    useEffect(() =>{
        setItems([
            {text:"f", id: 0},
            {text:"f", id: 1},
            {text:"f", id: 2},
        ])
    }, [])

    return(
        <div>
            <h1>List of rooms</h1>
            <div style = {{display: "flex", flexFlow: "row wrap"}}>
            {items.map(item => {
            return(
                <Room key = {item.id}  name = {item.text}/>
                )
             })}
            </div>
        </div>
    )
}

export default List