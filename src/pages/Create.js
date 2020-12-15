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
    const classes = useStyles();
    return (
    <React.Fragment>
      <Container className={classes.cont}>
        <form className={classes.root} noValidate autoComplete="off">
            <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
            />
            <label htmlFor="contained-button-file">
            <Button variant="contained" color="primary" component="span">
            Upload Photo
            </Button>
             </label>
            <TextField 
            name="name"
            id="name" label="Room name" 
            />
            <TextField
            id="standard-textarea"
            name="about"
            label="description"
            placeholder="Placeholder"
            multiline
            />
            <TextField
            label="Space"
            name="space"
            id="outlined-start-adornment"
            className={clsx(classes.margin, classes.textField)}
             InputProps={{
                startAdornment: <InputAdornment position="start">Sqm</InputAdornment>,
            }}
            variant="outlined"
            />
             <TextField
            id="outlined-number"
            label="Bathrooms"
            name="bathrooms"
            type="number"
            InputLabelProps={{
                shrink: true,
            }}
            variant="outlined"
            />
            <TextField
            name="sleepingArea"
            id="outlined-number"
            label="Sleeping areas"
            type="number"
            InputLabelProps={{
                shrink: true,
            }}
            variant="outlined"
            /> 
            <FormControlLabel
            name="miniBar"
            value=""
            control={<Switch color="primary" />}
            label="Mini-bar"
            labelPlacement="start"
            />
            <Button
            variant="contained"
            color="primary"
            size="small"
            className={classes.button}
            startIcon={<SaveIcon />}
            disabled={false}
            >
            Upload Room
            </Button>
        </form>
        
      </Container>
    </React.Fragment>
  );
}

export default Create