import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import React, { useState, useEffect } from "react";
import { useRouteMatch, Link } from "react-router-dom";
import {getRoom, deleteRoom} from "../api";
import Checkbox from "../components/checkbox"

const useStyles = makeStyles((theme) => ({
    
    input: {
        display: 'none',
    },
    cont: {
        backgroundColor: `#f3fcff`,
        marginLeft: 'auto',
        marginRight: 'auto',
        display: `flex`,
        flexFlow: `row wrap`,
        justifyContent: `space-between`,
        maxWidth: `1000px`,
        padding: 15,
        maxWidth: `1300px`,
        borderRadius: 30,
    },
    TextField: {
        marginTop: `100px`
    },
    del: {
        width: `50px`
    },
    title: {
      display: `flex`,
      backgroundColor: `lightblue`,
      padding: 15,
      borderRadius: 30,
      flexFlow: `column`,
      
    }
  }));

const Room = (props) => {
    const classes = useStyles();
    const [room, setRoom] = useState();
    const match = useRouteMatch()
    
    useEffect(() => {
      const fetchRoom = async () => {
        const room = await getRoom(match.params.id)
        setRoom(room)
      }
      fetchRoom()
    }, [match.params.id]);

    let q = 0
    let w = 0
    let e = 0
    let r = 0
    let t = 0
    let y = 0
    let u = 0
    let i = 0 
    let o = 0
    let p = 0


    if (room){
    return (
    <React.Fragment>
      <div>
        <Link to={`/Edit/${room._id}`} style={{color: 'black', textDecoration: 'none' }}>
        <Button variant="contained" color="primary" 
        style={{display: "flex", marginLeft:"auto", marginRight:"auto", marginTop:"150px", marginBottom:"50px"}}
        >
        Edit
        </Button>
        </Link>
        <form className={classes.cont} noValidate autoComplete="off">
          <Typography variant="h6" className={classes.title}>
            Name<br></br>{room.name}
          </Typography>

          <Typography variant="h6" className={classes.title}>
            About<br></br> {room.about}
          </Typography>

          <Typography variant="h6" className={classes.title}>
            Space&#13217;<br></br> {room.space}
          </Typography>

          <Typography variant="h6" className={classes.title}>
            Bathrooms<br></br> {room.bathrooms}
          </Typography>  
          
          <Typography variant="h6" className={classes.title}>
            Sleeping areas<br></br> {room.sleepingAreas}
          </Typography>  
          
          <Typography variant="h6" className={classes.title}>
            Default price €<br></br> {room.defaultPrice}
          </Typography>
          
      

        </form>
      <Checkbox style={{marginLeft: "auto", marginRight:"auto"}}  w = {w} e = {e} r = {r} t = {t} y = {y} u = {u} i = {i} o = {o} p = {p}/>

      </div>
      <div style = {{display:"none"}}>
      {room.conditioner!= "false" ? w = 1 : w = 0}      
      {room.view!= "false" ? e = 1 : e = 0}
      {room.bar!= "false" ? r = 1 : r = 0}
      {room.safe!= "false" ? t = 1 : t = 0}      
      {room.kitchen!= "false" ? y = 1 : y = 0}
      {room.plazma!= "false" ? u = 1 : u = 0}      
      {room.threeTimes!= "false" ? i = 1 : i = 0}
      {room.delievery!= "false" ? o = 1 : o = 0}
      {room.remoteControl!= "false" ? p = 1 : p= 0}
      {room.fridge!= "false" ? q = 1 : q = 0}
      </div>
      
    </React.Fragment>
    
  );
} else {
  return (
    <div>Loading...</div>
  )
}
}
export default Room