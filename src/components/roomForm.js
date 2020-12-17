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
    TextField: {
        marginTop: `100px`
    },
    del: {
        width: `50px`
    },
    button: {
      marginLeft: `auto`,
      marginRight: `auto`,
      width: `240px`,
      height: `40px`,
      marginTop: `25px`,
      fontSize: `12pt`
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
    
      <div>
      <h2>{article}</h2>
     
      <form onSubmit={submitHandler}  className="cont">
        <div className ="el">
        <div className="group">      
          <input 
          type="text"   
          ref={register}
          name="name"
          id="name"
          autoComplete="off"
          required
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Name</label>
        </div>
        <textarea
          placeholder="About"
          type="text"   
          ref={register}
          name="about"
          id="about"
          autoComplete="off"
          required
          >
        </textarea>
        </div>

        <div className="el">
        <div className="group">      
          <input 
          min="10" 
          max="300" 
          type="number"
          ref={register}
          name="space"
          id="space" 
          required
          autoComplete="off"
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Space &#13217;</label>
        </div>
        <div className="group" style={{marginLeft:"75px"}}>      
          <input
          min="20" 
          max="1000" 
          type="number"
          ref={register}
          name="defaultPrice"
          autoComplete="off"
          required
          id="defaultPrice"
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label htmlFor= "input">Default price €</label>
        </div>
        </div>
        <div className="el">
        <div className="group">      
          <input 
          min="1" 
          max="10" 
          type="number"
          ref={register}
          name="sleepingAreas"
          autoComplete="off"
          required
          id="sleepingAreas"
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Sleeping areas</label>
        </div>
        <div className="group" style={{marginLeft:"75px"}}>      
          <input
          min="1" 
          max="4" 
          type="number"   
          ref={register}
          name="bathrooms"
          autoComplete="off"
          required
          id="bathrooms"
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Bathrooms</label>
        </div>
        </div>
        <div className="el"></div>
        <div className="el"></div>
         

        
        
        <div className="checkbox">
        <ul className="ks-cboxtags">
        <li>
          <input type="checkbox" id="checkboxOne" value="Rainbow Dash"/>
          <label htmlFor="checkboxOne">Rainbow Dash</label>
        </li>
        <li>
          <input type="checkbox" id="checkboxTwo" value="Cotton Candy" />
          <label htmlFor="checkboxTwo">Cotton Candy</label>
        </li>
        <li>
          <input type="checkbox" id="checkboxThree" value="Rarity" />
          <label htmlFor="checkboxThree">Rarity</label>
        </li>
        <li>
          <input type="checkbox" id="checkboxFour" value="Moondancer"/>
          <label htmlFor="checkboxFour">Moondancer</label>
        </li>
        <li>
          <input type="checkbox" id="checkboxFour" value="Moondancer"/>
          <label htmlFor="checkboxFour">Moondancer</label>
        </li>
        <li>
          <input type="checkbox" id="checkboxFour" value="Moondancer"/>
          <label htmlFor="checkboxFour">Moondancer</label>
        </li>
        <li>
          <input type="checkbox" id="checkboxFour" value="Moondancer"/>
          <label htmlFor="checkboxFour">Moondancer</label>
        </li>
        <li>
          <input type="checkbox" id="checkboxFour" value="Moondancer"/>
          <label htmlFor="checkboxFour">Moondancer</label>
        </li>
        <li>
          <input type="checkbox" id="checkboxFour" value="Moondancer"/>
          <label htmlFor="checkboxFour">Moondancer</label>
        </li>
        <li>
          <input type="checkbox" id="checkboxFour" value="Moondancer"/>
          <label htmlFor="checkboxFour">Moondancer</label>
        </li>
        </ul>
        </div>
        <Button
        className="formButton"
        type="submit"
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        startIcon={<SaveIcon />}
        disabled={false}
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