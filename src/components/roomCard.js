import React from 'react';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: '290px',
    marginTop: 25,
    maxWidth: 300,
    marginLeft: 25,
    textDecoration: "none"
  }
});



export default function RoomCard(props) {
  const classes = useStyles();
  const room_id = props.id
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Link to={`/Room/${room_id}`} style={{color: 'black', textDecoration: 'none' }}>
        <CardMedia
          component="img"
          alt="xxx"
          height="140"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" >
              {props.about + " " }
          </Typography>
        </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
}
