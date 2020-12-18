import React from 'react';
import { createRoom } from "../api";
import { makeStyles } from '@material-ui/core/styles';
import {useHistory} from 'react-router-dom'
import RoomForm from '../components/RoomForm.js';

const Create = () => {
  const history = useHistory()
  
  const onSubmit = async (data) => {
    await createRoom(data)
    console.log(data)
    history.push("/")
  };

    return (
      <RoomForm onSubmit = { onSubmit } article = "Create a new room" buttonText = "upload"/>
  );
}
export default Create