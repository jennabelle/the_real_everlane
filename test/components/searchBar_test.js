import { renderComponent , expect } from '../test_helper'
import React from 'react'
import { shallow } from 'enzyme'
import SearchBar from '../../src/components/searchBar'
import AutoComplete from 'material-ui/AutoComplete'
import getMuiTheme from '../../node_modules/material-ui/styles/getMuiTheme'

describe('SearchBar' , () => {
  let component
  const muiTheme = getMuiTheme()
  const shallowWithContext = (node) => shallow(node, { context: { muiTheme }})

  beforeEach(() => {
    component = renderComponent( React.createElement(SearchBar) )
  })

  it('renders something', () => {
    expect(component).to.exist
  })

  it('has the correct class', () => {
  	expect(component).to.have.class('searchBar_wrapper')
  })

  // describe('entering some text via <AutoComplete />', () => {
  //   beforeEach(() => {
      // const wrapper = shallow(<SearchBar />)
    // })

    // it('contains <AutoComplete />', () => {
      // const wrapper = shallow(<SearchBar />)
      // expect(wrapper.contains(<AutoComplete />)).to.equal(true)
    // })
    // beforeEach(() => {
    //   console.log('component: ', component)
    //   component.find('AutoComplete').simulate('change', 'new comment')
    // })

    // it('shows text in the input field', () => {
    //   expect(component.find('AutoComplete')).to.have.value('new commen')
    // })

    // it('when submitted, clears the input', () => {
    //   component.find('AutoComplete').simulate.keyDown({ keyCode: 13 })
    //   expect(copmonent.find('AutoComplete')).to.have.value('')
    // })
  // })

  // it('has a input text area', () => {
  //   expect(component.find('textarea')).to.exist;
  // })

  // it('shows the correct text', () => {
  //   expect(component).to.contain('Search for products worn by real people');
  // });

  // it('pressing enter displays tweets', () => {
  //   simulate enter
  //   shows a tweet in specific styled way
  // });

  // it('given a list of tweets, it shows all the tweets', () => {

  // });
})