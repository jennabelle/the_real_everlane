import React, { Component } from 'react'
import { Link } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AutoComplete from 'material-ui/AutoComplete'
// import SearchBar from './searchBar'

const colors = [
  'Red',
  'Orange',
  'Yellow',
  'Green',
  'Blue',
  'Purple',
  'Black',
  'White',
]

export default class App extends Component {
  render() {
    return ( 
      	<div className='app_background'>
      		<MuiThemeProvider>
      			<AutoComplete
      				className='searchBar'
      				fullWidth={ true }
			      	floatingLabelText="Search products worn by real people..."
			      	filter={AutoComplete.caseInsensitiveFilter}
			      	dataSource={colors}
			    />
      		</MuiThemeProvider>
      	</div>
    );
  }
}
