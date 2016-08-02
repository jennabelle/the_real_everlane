import React, { Component } from 'react'
import axios from 'axios'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import SearchBar from './searchBar'
// import AutoComplete from 'material-ui/AutoComplete'
import injectTapEventPlugin from 'react-tap-event-plugin'
// import Tweet from 'react-tweet'

injectTapEventPlugin()

export default class App extends Component {

	constructor(props) {
		super(props)

		// this.state = { dataSource: [], tweets: [] }

		// this.handleUpdateInput = this.handleUpdateInput.bind(this)
		// this.onKeyDown = this.onKeyDown.bind(this)
	}
 // 	handleUpdateInput(value) { // save user input

	// 	this.setState({
	// 		dataSource: [ value ],
	// 		tweets: []
	// 	})
	// }
	// onKeyDown(value) {

	// 	if ( value.keyCode === 13 ) { // if user clicks 'enter'

	//   		console.log('this.state.dataSource: ', this.state.dataSource)

	//   		axios.post('/api/getTweets', { searchQuery: this.state.dataSource.join() })
	//   		.then( (resp) => {
	//   			console.log('axios post response: ', resp.data.statuses)

	//   			this.setState({ tweets: resp.data.statuses });
	//   		})
	//   		.catch( (resp) => {
	//   			console.log('axios catch response: ', resp)
	//   		})
	// 	}
	// }
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
