import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import Room from '../components/roomCard.js'
import { getRooms } from "../api"


const List = () => {
    const [items, setItems] = useState([])
    
    useEffect(() => {
        const fetchItems = async () => {
          const rooms = await getRooms()
          setItems(rooms)
        }
        fetchItems()
      }, [])

    return(
        <div>
            <h1>List of rooms</h1>
            <div style = {{display: "flex", flexFlow: "row wrap"}}>
            {items.map(room => {
            return(
                <Room key = {room._id} 
                  about = {room.about}
                  name = {room.name}
                  id = {room._id}/>
                )})}
            </div>
        </div>
    )
}

export default List