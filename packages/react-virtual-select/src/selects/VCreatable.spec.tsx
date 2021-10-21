import { mount } from '@cypress/react'
import { colourOptions } from '../data'
import VCreatable from './VCreatable'

it('renders VCreatable', () => {
  mount(<VCreatable options={colourOptions} id="VCreatable" />)

  cy.get('#VCreatable')
})
