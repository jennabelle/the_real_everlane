import React, { Component } from 'react'
import Tweet from 'react-tweet'

export default class SearchResults extends Component {

	constructor(props) {
		super(props)
	}
	render() {

		return (
			<div className='view_tweets'>
				{ 
					(this.props.tweets.length > 0) ? 
						this.props.tweets.map(function(name, index) {

							return (
								<div key={ index }>
									<Tweet data={ name } />
								</div>
							)} ) : ( this.props.afterSearchFlag ? <p>There are no matches.</p> : null )
				}
			</div>
   		);
   }
}
