import React, { Component } from 'react'
import { Grid, TextField, Button } from '@material-ui/core'

class App extends Component {
    render() {
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
                        <Button variant="contained">
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default App