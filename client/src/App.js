import React, { Component } from 'react'

import { Grid, FormControl, Button, InputLabel, Input } from '@material-ui/core'

import { uploadFile } from './api/apis.js'

class App extends Component {

    state = {
      file: null,
      names: []
    }

    onChangeHandler = event => {
      this.setState({
        file: event.target.files[0]
      })
    } 

    onClickHandler = () => {
      const data = new FormData()

      data.append('file', this.state.file)
      const config = {
          headers: {
              'content-type': 'multipart/form-data'
          }
      }
      uploadFile(data, config)
        .then(response => this.setState({ names: response.data }))
        .catch(err => console.log(err))
    }

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
                    <FormControl>
                      <Input type="file" name="pic" accept="image/*" onChange={this.onChangeHandler} />
                      <Button onClick={this.onClickHandler}>Submit</Button>
                    </FormControl>
                </Grid>
                <Grid item>
                  {this.state.names}
                </Grid>
              </Grid>
            </div>
        )
    }
}

export default App