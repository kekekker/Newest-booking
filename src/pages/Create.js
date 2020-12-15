export const Create = () => {
    const history = useHistory() 
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
            onChange = {changeHandler}
            />
            <TextField
            id="standard-textarea"
            name="about"
            label="description"
            onChange = {changeHandler}
            placeholder="Placeholder"
            multiline
            />
            <TextField
            label="Space"
            name="space"
            id="outlined-start-adornment"
            onChange = {changeHandler}
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
            onChange = {changeHandler}
            type="number"
            InputLabelProps={{
                shrink: true,
            }}
            variant="outlined"
            />
            <TextField
            name="sleepingArea"
            id="outlined-number"
            onChange = {changeHandler}
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
            onClick = {addHandler}
            disabled={false}
            >
            Upload Room
            </Button>
        </form>
        <CheckboxList
        name="facilities" 
        />
      </Container>
    </React.Fragment>
  );
}