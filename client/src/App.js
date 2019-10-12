import React, { Component } from 'react'
import { Grid, TextField } from '@material-ui/core'

<<<<<<< HEAD
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="URL-field"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
=======
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
>>>>>>> 7b3829b670780ad5ff36dc1a722c639041343886
}

export default App