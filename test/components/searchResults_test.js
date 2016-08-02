import { renderComponent , expect } from '../test_helper'
import React from 'react'
import SearchResults from '../../src/components/searchResults'
import SampleTweets from '../sampleTweets'

describe('SearchResults' , () => {
  let component

  beforeEach(() => {
    component = renderComponent( React.createElement(SearchResults, { tweets: SampleTweets }) )
  })

  // it('renders something', () => {
  //   expect(component).to.exist
  // })

  // it('has the correct class', () => {
  // 	expect(component).to.have.class('view_tweets')
  // })

  // it('shows a div for each tweet', () => {

  // })

  // it('shows each tweet that is provided', () => {

  // })

  // it('given a list of tweets, it shows all the tweets', () => {

  // });
})