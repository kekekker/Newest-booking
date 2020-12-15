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
    marginTop: 25,
    maxWidth: 300,
    marginLeft: 25,
  },
  link: {
    textDecoration: "none"
  }
});



export default function RoomCard(props) {
  const classes = useStyles();
  const room_id = props.id
  return (
    <Card className={classes.root}>
      <CardActionArea>
        {/* <Link to={`/CertRoom/${room_id}`} className={classes.link}>  */}
        <CardMedia
          component="img"
          alt="xxx"
          height="140"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" name = {props.name}>
          {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
              {props.about + " " + "qweqweqweqweqw eqweqweqweqweq weqweqweqweqweqw qweqwe"}
          </Typography>
        </CardContent>
        {/* </Link> */}
      </CardActionArea>
    </Card>
  );
}
