import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import axios from 'axios'
import AutoComplete from 'material-ui/AutoComplete'
import CircularProgress from 'material-ui/CircularProgress'
import SearchResults from './searchResults'

export default class SearchBar extends Component {

	static propTypes = {
	    searchTerms: React.PropTypes.array
	};

	static defaultProps = {
	    searchTerms: [ 'dress', 'shoes', 'backpack', 'handbag' ]
	}

	constructor(props) {
		super(props)

		this.state = { dataSource: [], tweets: [], afterSearchFlag: false, isFetching: false }

		this.handleUpdateInput = this.handleUpdateInput.bind(this)
		this.searchTweets = this.searchTweets.bind(this)
	}
 	handleUpdateInput(value) { // save user input

		this.setState({
			dataSource: [ value ]
		})
	}
	searchTweets(value) {

		this.setState({ isFetching: true })

	  	axios.post('/api/getTweets', { searchQuery: this.state.dataSource.join() })
	  	.then( (resp) => {
	  		this.setState({ afterSearchFlag: true, tweets: resp.data.statuses, isFetching: false }) // keep track of when user has entered search input the first time
	  		// this.setState({ tweets: resp.data.statuses })
	  	})
	  	.catch( (resp) => {
	  		console.log('axios catch response: ', resp)
	  	})
	}
	render() {

		return (
 			<div className='searchBar_wrapper'>
 				<MuiThemeProvider>
 					<div>
				      	<AutoComplete
				      	 className='searchBar'
				      	 fullWidth={ true }
				      	 filter={ AutoComplete.fuzzyFilter }
						 hintText='Type a product and press enter'
						 dataSource={ this.props.searchTerms }
						 onUpdateInput={ this.handleUpdateInput }
						 onNewRequest={ this.searchTweets }
						 floatingLabelText='Search for products worn by real people'
						 maxSearchResults={ 5 }
						 />
						 { 
						 	this.state.isFetching ? <CircularProgress /> : <SearchResults tweets={ this.state.tweets } afterSearchFlag={ this.state.afterSearchFlag } />
						 }
					</div>
				</MuiThemeProvider>
			</div>
   	);
   }
}
