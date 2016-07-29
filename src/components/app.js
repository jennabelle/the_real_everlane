import React, { Component } from 'react'
import { Link } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AutoComplete from 'material-ui/AutoComplete'
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
// import SearchBar from './searchBar'

const terms = [
	'Bags',
	'Blouse',
  	'Dress',
  	'Outerwear',
  	'Pants',
  	'Shoes',
  	'T-Shirt'
]

export default class App extends Component {

	constructor(props) {
		super(props)

		this.state = { dataSource: [] }

		this.handleUpdateInput = this.handleUpdateInput.bind(this)
	}
 	handleUpdateInput(value) {

		console.log('value: ', value)

		this.setState({
			dataSource: [ value ]
		});
	};
	render() {
		return ( 
      	<div className='app_background'>
      		<MuiThemeProvider>
      			<AutoComplete
			          hintText="Type anything"
			          dataSource={this.state.dataSource}
			          onUpdateInput={this.handleUpdateInput}
			          floatingLabelText="Search for products worn by real people" 
			          fullWidth={ true }
			          />
      		</MuiThemeProvider>
      	</div>
    );
  }
}
