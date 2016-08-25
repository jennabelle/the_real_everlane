import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import axios from 'axios'
import AutoComplete from 'material-ui/AutoComplete'
import SearchResults from './searchResults'

export default class SearchBar extends Component {

	constructor(props) {
		super(props)

		this.state = { dataSource: [], tweets: [], afterSearchFlag: false }

		this.handleUpdateInput = this.handleUpdateInput.bind(this)
		this.onKeyDown = this.onKeyDown.bind(this)
	}
 	handleUpdateInput(value) { // save user input

		this.setState({
			dataSource: [ value ]
		})
	}
	onKeyDown(value) {

		if ( value.keyCode === 13 ) { // if user clicks 'enter'

	  		axios.post('/api/getTweets', { searchQuery: this.state.dataSource.join() })
	  		.then( (resp) => {
	  			this.setState({ afterSearchFlag: true })
	  			this.setState({ tweets: resp.data.statuses })
	  		})
	  		.catch( (resp) => {
	  			console.log('axios catch response: ', resp)
	  		})
		}
	}
	render() {

		return (
 			<div className='searchBar_wrapper'>
 				<MuiThemeProvider>
 					<div>
				      	<AutoComplete
				      	 className='searchBar'
				      	 fullWidth={ true }
						 hintText='Type a product and press enter'
						 dataSource={ this.state.dataSource }
						 onUpdateInput={ this.handleUpdateInput }
						 onKeyDown={ this.onKeyDown }
						 floatingLabelText='Search for products worn by real people'
						 />
						<SearchResults tweets={ this.state.tweets } afterSearchFlag={ this.state.afterSearchFlag } />
					</div>
				</MuiThemeProvider>
			</div>
   	);
   }
}
