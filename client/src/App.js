import React, { Component } from 'react'
import { Grid, TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

class App extends Component {
    render() {
      const classes = useStyles();
        return (
            <div>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  style={{height: "100vh"}}
                >
                    <Grid item>
                        <form action="http://localhost:3001/upload" method="post" enctype="multipart/form-data">
                            <input type="file" name="pic" accept="image/*" />
                            <input type="submit" />
                        </form>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" className={classes.button}>
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default App