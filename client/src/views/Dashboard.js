import React, { Component, Fragment } from 'react'

import { Grid, Button, Paper, withStyles, MenuItem, Select, Typography, Grow, Snackbar, CircularProgress, TextField, Menu } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab';
import { uploadFile } from '../api/apis.js'
import dashboardStyles from '../styles/dashboardStyles'
import { languages } from '../utils/utils'

class Dashboard extends Component {

  state = {
    file: { name: "" },
    names: [],
    filePreview: null,
    openMenu: false,
    selectedLang: {
      code: "ga",
      language: "Irish"
    },
    errors: {},
    box: {},
    checked: false,
    loadingIcon: false
  }

  onCheckedHandlerTrue = () =>{
    this.setState({checked: true})
  }

  onCheckedHandlerFalse = () =>{
    this.setState({checked:false})
  }

  loadingIconHandler = () =>{
    let tempLoadIcon = !this.state.loadingIcon;
    this.setState({loadingIcon: tempLoadIcon})
  }

  onChangeHandler = event => {
    const file = this.state.filePreview
    this.setState({
      checked: false,
      file: event.target.files[0],
      filePreview: URL.createObjectURL(event.target.files[0])
    })

  } 

  onClickHandler = async () => {
    this.onCheckedHandlerFalse()
    this.loadingIconHandler()
    const selLang = languages.filter(lang => lang.language === this.state.selectedLang.language)

    const data = new FormData()
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }

    data.append('file', this.state.file)
    data.append('lang', selLang[0].code)

    if (this.state.file.name === "") {
      return this.handleNoFileClick()
    }

    await uploadFile(data, config)
      .then(response => 
        this.setState({ names: response.data }, () =>{
          this.onCheckedHandlerTrue()
          this.loadingIconHandler()
        }))
      
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
      selectedLang: {
        language: event.target.value
      } 
    })
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
                          <img src={this.state.filePreview} id="inputImage" className={classes.img} alt="" />
                        </div>
                      </Grid>
                    </Grid>
                  <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="flex-end"
                  >
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
                             labelId="demo-simple-select-label"
                             id="demo-simple-select"
                             value={this.state.selectedLang.language}
                             className={classes.langSel}
                             onChange={this.changeLanguage}
                           >
                             {languages.map((lang) => {
                               return <MenuItem value={lang.language}>{lang.language}</MenuItem>
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
            <Grid item xs={12} sm={5}>
              <div className={classes.wrapper}>
                <Paper className={classes.paper}>
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    {this.state.loadingIcon ? 
                          <Grid
                            container
                            direction="column"
                            justify="center"
                            alignItems="center"
                          >
                            <Grid item>
                              <CircularProgress size = {100}/>
                            </Grid>
                          </Grid> : null
                    }
                      <Grow in={this.state.checked}>
                        <Grid item style={{width: "50%", padding: "8px"}}>
                          <Paper elevation12>
                            <Typography variant="h3">
                              English
                            </Typography>
                            {this.state.names.map((name, key) => {
                              return <p key={key}> {name.original} </p>
                            })}
                          </Paper>
                        </Grid>
                      </Grow>
                      <Grow in={this.state.checked}>
                        <Grid item style={{width: "50%", padding:"8px"}}>
                          <Paper>
                            <Typography variant="h3">
                              {this.state.selectedLang.language}
                            </Typography>
                            {this.state.names.map((name, key) => {
                              return <p key={key}> {name.translated} </p>
                            })}
                          </Paper>
                        </Grid>
                      </Grow>
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
          message={<Typography> Select a file to upload </Typography>}
        />
      </Fragment>
    )
  }
}

export default withStyles(dashboardStyles)(Dashboard)
