import React, { useState, useEffect } from "react";
import  RoomForm  from "../components/RoomForm";
import { useRouteMatch, useHistory, Link } from "react-router-dom";
import { getRoom, updateRoom } from "../api";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {deleteRoom} from '../api'
import DeleteIcon from '@material-ui/icons/Delete';


const Edit = () => {
  const match = useRouteMatch()
  const [room, setRoom] = useState();
  const history = useHistory()

  useEffect(() => {
    const fetchRoom = async () => {
      const room = await getRoom(match.params.id)
      setRoom(room)
    }
    fetchRoom()
  }, [match.params.id]);

  const onSubmit = async (data) => {
    await updateRoom(data, match.params.id)
    history.push("/")
  }

  

  const del = async () => {
      await deleteRoom (room, match.params.id)
      console.log("asdfgh")
    };

    return (room ?
      <div>
      <RoomForm 
      room = { room } 
      onSubmit = { onSubmit } 
      article = "Edit" 
      buttonText = "update"
      />
      <Link to={`/List`} 
      style={{color: 'black', textDecoration: 'none' }}
      >
      <Button
      variant="contained"
      color="secondary"
      onClick = {del}
      startIcon={<DeleteIcon />}
      style={{display: "flex", marginLeft:"auto", marginRight:"auto", marginTop:"20px"}}
      >
      Delete room
      </Button>
      </Link>
      </div>
      :
    <div>Loading...</div>
  );
}
export default Edit