import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';

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
  let flag = false 
  let data = false

const Room = () => {
    const classes = useStyles();
    return (
    <React.Fragment>
      <Container className={classes.cont}>
        <form className={classes.root} noValidate autoComplete="off">
            <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<DeleteIcon />}
            >
            Delete room
            </Button>
            
          <Typography variant="h6" className={classes.title}>
            Name: 
          </Typography>
            
          <Typography variant="h6" className={classes.title}>
            Space:
          </Typography>

          <Typography variant="h6" className={classes.title}>
            Bathrooms:
          </Typography>  
          
          <Typography variant="h6" className={classes.title}>
            Space areas:
          </Typography>  
          
          <Typography variant="h6" className={classes.title}>
            Minibar:
          </Typography>
        </form>
      </Container>
    </React.Fragment>
  );
}

export default Room