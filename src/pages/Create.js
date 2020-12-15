import React from 'react';
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
import 'materialize-css'
import RoomForm from '../components/roomForm';


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
    const classes = useStyles()

    const { register, handleSubmit } = useForm()
    const history = useHistory()
    
    const onSubmit = (data) => {
      alert("qwe")
  }

    return (
      <RoomForm onSubmit = { onSubmit }/>

  );
}

// <FormControlLabel
//             name="miniBar"
//             value=""
//             control={<Switch color="primary" />}
//             label="Mini-bar"
//             labelPlacement="start"
//             />
//             <Button
//             type="submit"
//             variant="contained"
//             color="primary"
//             size="small"
//             className={classes.button}
//             startIcon={<SaveIcon />}
//             disabled={false}
//             >
//             Upload Room
//             </Button>
export default Create