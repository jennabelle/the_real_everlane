import React, { Component } from 'react'
import { Link } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AutoComplete from 'material-ui/AutoComplete'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin();

export default class App extends Component {

	constructor(props) {
		super(props)

		this.state = { dataSource: [] }

		this.handleUpdateInput = this.handleUpdateInput.bind(this)
		this.onKeyDown = this.onKeyDown.bind(this)
	}
 	handleUpdateInput(value) { // save user input
		console.log('this.state.dataSource: ', this.state.dataSource)

		this.setState({
			dataSource: [ value ]
		})
	}
	onKeyDown(value) { // when user clicks 'enter'

		if (value.keyCode === 13) {
			console.log('user pressed enter!')
		}
	}
	render() {
		return (
      	<div className='app_background'>
      		<MuiThemeProvider>
      			<AutoComplete
			          hintText="Type anything"
			          dataSource={ this.state.dataSource }
			          onUpdateInput={ this.handleUpdateInput }
			          onKeyDown={ this.onKeyDown }
			          floatingLabelText="Search for products worn by real people" 
			          fullWidth={ true }
			          />
      		</MuiThemeProvider>
      	</div>
    );
  }
}
