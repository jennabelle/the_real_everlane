import React, { Component } from 'react'
import { Link } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AutoComplete from 'material-ui/AutoComplete'

export default class App extends Component {
  render() {
    return ( 
      <MuiThemeProvider>
      	<div className='app_background'>
      	</div>
      </MuiThemeProvider>
    );
  }
}
