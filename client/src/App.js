import React, { Component } from 'react'
import { Grid, TextField } from '@material-ui/core'

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
                        <TextField
                            placeholder="this is something great"
                        />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default App