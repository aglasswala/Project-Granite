import React, { Component } from 'react'

import { Grid, Button, Paper, withStyles, MenuItem, Select } from '@material-ui/core'

import { uploadFile } from '../api/apis.js'
import dashboardStyles from '../styles/dashboardStyles'

class Dashboard extends Component {

  state = {
    file: { name: "" },
    names: [],
    filePreview: null,
    openMenu: false,
    selectedLang: "ga",
    errors: {}
  }

  onChangeHandler = event => {
    const file = this.state.filePreview
    this.setState({
      file: event.target.files[0],
      filePreview: file || URL.createObjectURL(event.target.files[0])
    })
  } 

  onClickHandler = () => {
    const data = new FormData()

    data.append('file', this.state.file)
    data.append('lang', this.state.selectedLang)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    uploadFile(data, config)
      .then(response => this.setState({ names: response.data }))
      .catch(err => {
        this.setState({
          errors: err
        })
      })
  }

  handleMenuClick = (state) => {
    this.setState({
      openMenu: state
    })
  }

  changeLanguage = event => {
    this.setState({
      selectedLang: event.target.value
    })
  }

  render() {
    const { classes } = this.props
    console.log(this.state.errors)
    return (
        <div>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={24}
          >
            <Grid item xs={12} md={5}>
              <div className={classes.wrapper}>
                <Paper className={classes.paper}>
                  <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                  >
                    <Grid item>
                      <div className={classes.wrapper}>
                        <img src={this.state.filePreview} className={classes.img} alt="" />
                      </div>
                    </Grid>
                    <Grid item>
                      <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="flex-end"
                        style={{height: "90%"}}
                      >
                        <Grid item>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={this.state.selectedLang}
                            onChange={this.changeLanguage}
                          >
                            <MenuItem value={"en"}>EN</MenuItem>
                            <MenuItem value={"ca"}>CA</MenuItem>
                            <MenuItem value={"ga"}>GA</MenuItem>
                          </Select>
                        </Grid>
                        <Grid item>
                          <div className={classes.wrapper}>
                            <input
                              accept="image/*"
                              style={{ display: 'none' }}
                              id="raised-button-file"
                              multiple
                              onChange={this.onChangeHandler}
                              type="file"
                            />
                            <label htmlFor="raised-button-file">
                              <Button variant="contained" component="span">
                                Upload 
                              </Button>
                            </label>
                          </div>
                        </Grid>
                        <Grid item>
                          <div className={classes.wrapper}>
                            <Button onClick={this.onClickHandler}>Submit</Button>
                          </div>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </div>
            </Grid>
            <Grid item xs={12} md={5}>
              <div className={classes.wrapper}>
                <Paper className={classes.paper}>
                  {this.state.error}
                  {this.state.names.map((name, key) => {
                    return <p key={key}> {name} </p>
                  })}
                </Paper>
              </div>
            </Grid>
          </Grid>
        </div>
    )
  }
}

export default withStyles(dashboardStyles)(Dashboard)