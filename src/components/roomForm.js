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

const roomForm = ({ room, submitHandler }) => {
    const classes = useStyles()

    const { room, setRoom } = useState()
    const { register, handleSubmit } = useForm({
        defaultValues: {text : room ? room.text : "" }
    })

    const history = useHistory()

    const submitHandler = handleSubmit((data) => {
        onSubmit(data)
        history.push("/")
    });

    return (
    
    <React.Fragment>
      <Container className={classes.cont}>
      <form onSubmit={submitHandler}>
      <div className="">
        <input
          className=""
          ref={register}
          type="text"
          name="name"
          id="name"
        />
        <input
          className=""
          ref={register}
          type="text"
          name="about"
          id="about"
        />
        <input
          className=""
          ref={register}
          type="text"
          name="space"
          id="space"
        />
        <input
          className=""
          ref={register}
          type="text"
          name="sleeping areas"
          id="sleeping areas"
        />
        <input
          className=""
          ref={register}
          type="text"
          name="default price"
          id="default price"
        />
        <input
          className=""
          ref={register}
          type="text"
          name="bathrooms"
          id="bathrooms"
        />
      </div>
      <div className="">
      <Button
      type="submit"
      variant="contained"
      color="primary"
      size="small"
      className={classes.button}
      startIcon={<SaveIcon />}
      disabled={false}
      >
      Upload Room
      </Button>
      </div>
      </form> 
            
        
      </Container>
    </React.Fragment>
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
export default roomForm