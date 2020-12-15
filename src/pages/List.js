import React, { useCallback, useState, useEffect } from 'react'
import RoomCard from '../components/roomCard.js'

const List = () => {
    return(
        <div>
            <h1>List of rooms</h1>
            <RoomCard name = "kaka"/>
            {/* <RoomsList rooms = {rooms} /> */}
        </div>
    )
}

export default List