import React from 'react';
import { createRoom } from "../api";
import { makeStyles } from '@material-ui/core/styles';
import {useHistory} from 'react-router-dom'
import 'materialize-css'
import RoomForm from '../components/RoomForm.js';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
      height: `100%`,
      display: `flex`,
      flexDirection: `column`,
      justifyContent: `space-between`
    },
    input: {
        display: 'none',
    },
    cont: {
        display: `flex`,
        flexDirection: `row`,
        justifyContent: `space-between`,
        height: `590px`,
        maxWidth: `1000px`,        
        marginTop: 100,
    },
    TextField: {
        marginTop: `100px`
    },
    del: {
        width: `50px`
    }
  }));

const Create = () => {
  const history = useHistory()
  
  const onSubmit = async (data) => {
    await createRoom(data)
    history.push("/")
  };

    return (
      <RoomForm onSubmit = { onSubmit } article = "Create a new room" buttonText = "upload"/>
  );
}
export default Create