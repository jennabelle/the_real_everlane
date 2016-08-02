import { renderComponent , expect } from '../test_helper'
import React from 'react'
import SearchResults from '../../src/components/searchResults'

describe('SearchResults' , () => {
  let component

  beforeEach(() => {
    component = renderComponent( React.createElement(SearchResults, { comments: [] }, null) )
  })

  // // it('renders something', () => {
  // //   expect(component).to.exist
  // // })

  // it('has the correct class', () => {
  // 	expect(component).to.have.class('view_tweets')
  // })

  // it('shows a div for each tweet', () => {

  // })

  // it('shows each tweet that is provided', () => {

  // })
})