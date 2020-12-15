import React, {useState, useEffect} from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import InputAdornment from '@material-ui/core/InputAdornment';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import { useForm } from "react-hook-form";
import Input from '@material-ui/core/Input';
import {useHistory} from 'react-router-dom'
import RoomForm from './components/roomForm'
import 'materialize-css'


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

const Edit = () => {
    const classes = useStyles()

    const { room, setRoom } = useState()
    const { register, handleSubmit } = useForm({
        defaultValues: {text : room ? room.text : "" }
    })

    const history = useHistory()
    
    useEffect(() => {
        setRoom()
    }, [])

    const onSubmit = (data) => {
        alert("qwe")
    }


    return (
    <RoomForm room = {room} onSubmit = { onSubmit }/>
  );
}
export default Edit