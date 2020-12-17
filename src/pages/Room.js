import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import React, { useState, useEffect } from "react";
import { useRouteMatch, Link } from "react-router-dom";
import {getRoom, deleteRoom} from "../api";

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

    

    if (room){
    return (
    <React.Fragment>
      <Container className={classes.cont}>
        <form className={classes.root} noValidate autoComplete="off">
        <Link to={`/Edit/${room._id}`} style={{color: 'black', textDecoration: 'none' }}>
        <Button variant="contained" color="primary">
        Edit
        </Button>
        </Link>
            
            
          <Typography variant="h6" className={classes.title}>
            Name: {room.name}
          </Typography>

          <Typography variant="h6" className={classes.title}>
            About: {room.about}
          </Typography>

          <Typography variant="h6" className={classes.title}>
            Space: {room.space}
          </Typography>

          <Typography variant="h6" className={classes.title}>
            Bathrooms: {room.bathrooms}
          </Typography>  
          
          <Typography variant="h6" className={classes.title}>
            Sleeping areas: {room.sleepingAreas}
          </Typography>  
          
          <Typography variant="h6" className={classes.title}>
            Default price: {room.defaultPrice}
          </Typography>
        </form>
      </Container>
    </React.Fragment>
  );
} else {
  return (
    <div>Loading...</div>
  )
}
}
export default Room