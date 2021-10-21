import { mount } from '@cypress/react'
import { colourOptions } from '../data'
import VSelect from './VSelect'

it('renders VSelect', () => {
  mount(<VSelect options={colourOptions} id="VSelect-id" />)

  cy.get('#VSelect')
})
