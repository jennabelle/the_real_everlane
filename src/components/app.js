import React, { Component } from 'react'
import axios from 'axios'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import SearchBar from './searchBar'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

export default class App extends Component {

	constructor(props) {
		super(props)
	}
	render() {
		return (
      	<div className='app_background'>
      		<MuiThemeProvider>
 					<div>
 						<SearchBar />
				   </div>
      		</MuiThemeProvider>
      	</div>
   	);
   }
}
