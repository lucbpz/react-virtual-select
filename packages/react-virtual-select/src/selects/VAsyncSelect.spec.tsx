import { mount } from '@cypress/react'
import { colourOptions } from '../data'
import VAsyncSelect from './VAsyncSelect'

it('renders VAsyncSelect', () => {
  mount(<VAsyncSelect options={colourOptions} id="VAsyncSelect" />)

  cy.get('#VAsyncSelect')
})
