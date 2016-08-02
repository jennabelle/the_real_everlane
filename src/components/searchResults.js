import React, { Component } from 'react'
import Tweet from 'react-tweet'

export default class SearchResults extends Component {

	constructor(props) {
		super(props)
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
			<div className='view_tweets'>
				{ this.props.tweets.map(function(name, index) {

					return (
						<div key={ index }>
							<Tweet data={ name } />
						</div>
					)}
				)}
			</div>
   		);
   }
}
