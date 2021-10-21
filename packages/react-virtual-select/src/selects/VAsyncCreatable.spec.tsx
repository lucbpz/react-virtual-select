import { mount } from '@cypress/react'
import { colourOptions } from '../data'
import VAsyncCreatable from './VAsyncCreatable'

it('renders VAsyncCreatable', () => {
  mount(<VAsyncCreatable options={colourOptions} id="VAsyncCreatable" />)

  cy.get('#VAsyncCreatable')
})
