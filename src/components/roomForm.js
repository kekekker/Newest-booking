import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import { useForm } from "react-hook-form";
import {useHistory} from 'react-router-dom'


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

function RoomForm({ room, onSubmit, article, buttonText}){
    
  const classes = useStyles()
  const { register, handleSubmit } = useForm({
      defaultValues: {name: room ? room.name : "",
      space: room ? room.space : "",
      sleepingAreas: room ? room.sleepingAreas : "",
      bathrooms: room ? room.bathrooms : "",
      defaultPrice: room ? room.defaultPrice : "",
      about: room ? room.about : "",
      }
    })
    
    const submitHandler = handleSubmit((data) => {
        onSubmit(data)
    });
   
    return (
    
      <div className="container cont">
      <h2>{article}</h2>
     
      <form onSubmit={submitHandler}>
        <div className="group">      
          <input 
          type="text"   
          ref={register}
          name="name"
          id="name"
          autoComplete="off"
          />
          <span className="highlight"></span>
          <span classNameName="bar"></span>
          <label>Name</label>
        </div>
          

        <div className="group">      
          <input 
          type="text"   
          ref={register}
          name="about"
          id="about"
          autoComplete="off"
          />
          <span className="highlight"></span>
          <span classNameName="bar"></span>
          <label>About</label>
        </div>

        <div className="group">      
          <input 
          type="text"   
          ref={register}
          name="space"
          id="space" 
          autoComplete="off"
          />
          <span className="highlight"></span>
          <span classNameName="bar"></span>
          <label>Space</label>
        </div>

        <div className="group">      
          <input 
          type="text"   
          ref={register}
          name="sleepingAreas"
          autoComplete="off"
          id="sleepingAreas"
          />
          <span className="highlight"></span>
          <span classNameName="bar"></span>
          <label>Sleeping areas</label>
        </div>

        <div className="group">      
          <input 
          type="text"   
          ref={register}
          name="defaultPrice"
          autoComplete="off"
          id="defaultPrice"
          />
          <span className="highlight"></span>
          <span classNameName="bar"></span>
          <label htmlFor= "input">Default price</label>
        </div>

        <div className="group">      
          <input 
          type="text"   
          ref={register}
          name="bathrooms"
          autoComplete="off"
          id="bathrooms"
          />
          <span className="highlight"></span>
          <span classNameName="bar"></span>
          <label>Bathrooms</label>
        </div>
        <Button
        type="submit"
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        startIcon={<SaveIcon />}
        disabled={false}
        style = {{ width: '220px'}}
        >
        {buttonText}
        </Button>
      </form>
    </div>
     
        
      
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

export default RoomForm