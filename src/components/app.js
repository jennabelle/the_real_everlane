import React, { Component } from 'react'
import { Link } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import AutoComplete from 'material-ui/AutoComplete'
// import SearchBar from './searchBar'

const colors = [
  'Dress',
  'Shoes',
  'Outerwear',
  'Bags',
  'Pants',
  'Blouse',
  'T-Shirt'
]

export default class App extends Component {
  render() {
    return ( 
      	<div className='app_background'>
      		<MuiThemeProvider muiTheme={ getMuiTheme(lightBaseTheme) } >
      			<AutoComplete
      				className='searchBar'
      				fullWidth={ true }
			      	floatingLabelText="Search for products worn by real people..."
			      	filter={ AutoComplete.caseInsensitiveFilter }
			      	dataSource={ colors } />
      		</MuiThemeProvider>
      	</div>
    );
  }
}
