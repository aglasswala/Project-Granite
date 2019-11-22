import React, { Component, Fragment } from 'react'

import { Grid, Button, Paper, withStyles, MenuItem, Select, Typography, Snackbar } from '@material-ui/core'

import { uploadFile } from '../api/apis.js'
import dashboardStyles from '../styles/dashboardStyles'
import { languages } from '../utils/utils'


class Dashboard extends Component {

  state = {
    file: { name: "" },
    names: [],
    filePreview: null,
    openMenu: false,
    selectedLang: "ga",
    errors: {},
    box: {},
    noFile: false
  }

  onChangeHandler = event => {
    const file = this.state.filePreview
    this.setState({
      file: event.target.files[0],
      filePreview: file || URL.createObjectURL(event.target.files[0])
    })
  } 

  onClickHandler = async () => {
    if (this.state.errors) {
      return this.handleNoFileClick()
    }

    const data = new FormData()

    data.append('file', this.state.file)
    data.append('lang', this.state.selectedLang)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    if (this.state.file.name === "") {
      this.setState({
        errors: {
          err: "Upload a file you fuck"
        }
      })
      return 
    }
    await uploadFile(data, config)
      .then(response => this.setState({ names: response.data }))
      .catch(err => {
        this.setState({
          errors: err
        })
      })
    this.calculateFaceLocation()
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

  calculateFaceLocation = () => {
    // let clar = this.state.names.filter(name => name.instance.length !== 0)

    // const image = document.getElementById('inputImage')
    // const width = Number(image.width);
    // const height = Number(image.height);

    // console.log(width)
    // console.log(height)
    // this.setState({
    //   box: {
    //     leftCol: clar.BoundingBox.Left * width,
    //     topRow: clar.BoundingBox.Top * height,
    //     rightCol: width - (clar.BoundingBox.Width * width),
    //     bottomRow: height - (clar.BoundingBox.Width * height)
    //   }
    // })
  }

  handleNoFileClick = () => {
    this.setState({
      noFile: true
    })
  }

  handleClose = () => {
    this.setState({
      noFile: false
    })
  }

  render() {
    const { classes } = this.props
    const { box } = this.state
    return (
      <Fragment>
        <div>
          <div className={classes.toolbar} />
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
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
                        <img src={this.state.filePreview} id="inputImage" style={{width: "400px"}} className={classes.img} alt="" />
                        <div className={classes.bounding_box} style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol, zIndex:"100"}}></div>
                      </div>
                    </Grid>
                    <Grid item style={{width: "100%"}}>
                      <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                        style={{width: "100%"}}
                      >
                        <Grid item style={{width: "50%"}}>
                          <Select
                            value={this.state.selectedLang}
                            onChange={this.changeLanguage}
                            style={{width: "100%"}}
                          >
                            {languages.map((lang, key) => {
                              return <MenuItem key={key} value={lang.code}>{lang.language}</MenuItem>
                            })}
                          </Select>
                        </Grid>
                        <Grid item style={{width: "50%"}}>
                          <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                          >  

                            <Grid item style={{width: "50%"}}>
                              <div className={classes.buttonSpace1}>
                                <input
                                  accept="image/*"
                                  style={{ display: 'none' }}
                                  id="raised-button-file"
                                  multiple
                                  onChange={this.onChangeHandler}
                                  type="file"
                                />
                                <label htmlFor="raised-button-file">
                                  <Button variant="contained" component="span" color="primary" style={{width: "100%"}}>
                                    Upload 
                                  </Button>
                                </label>
                              </div>
                            </Grid>
                            <Grid item style={{width: "50%"}}>
                              <div className={classes.buttonSpace2}>
                                <Button onClick={this.onClickHandler} size="large" style={{width: "100%"}}>
                                  Submit
                                </Button>
                              </div>
                            </Grid>
                          </Grid>
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
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    <Grid item style={{width: "50%"}}>
                      <Typography variant="h3">
                        English
                      </Typography>
                      {this.state.names.map((name, key) => {
                        return <p key={key}> {name.original} </p>
                      })}
                    </Grid>
                    <Grid item style={{width: "50%"}}>
                      <Typography variant="h3">
                        {this.state.selectedLang}
                      </Typography>
                      {this.state.names.map((name, key) => {
                        return <p key={key}> {name.translated} </p>
                      })}
                    </Grid>
                  </Grid>
                </Paper>
              </div>
            </Grid>
          </Grid>
        </div>
         <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={this.state.noFile}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Upload a file you fuck</span>}
        />
      </Fragment>
    )
  }
}

export default withStyles(dashboardStyles)(Dashboard)
