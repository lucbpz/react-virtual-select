/// <reference types="cypress" />

import { mount } from '@cypress/react'
import App from './App'

describe('App component', () => {
  beforeEach(() => {
    // run these tests as if in a desktop
    // browser with a 720p monitor
    cy.viewport(1280, 720)
  })
  it('should render App component', () => {
    mount(<App />)

    cy.get('[data-test-id="logo"]')

    cy.contains(/react virtual select/i)
    cy.get('#VSelect')

    cy.contains(/react virtual async select/i)
    cy.get('#VAsyncSelect')

    cy.contains(/react virtual creatable select/i)
    cy.get('#VCreatableSelect')

    cy.contains(/react virtual async creatable select/i)
    cy.get('#VAsyncCreatableSelect')

    cy.get('[data-test-id="footer"]')

    cy.get('[data-test-id="react-select-docs"]')
      .should('have.prop', 'href')
      .and('equal', 'https://github.com/jedwatson/react-select')

    cy.get('[data-test-id="lucbpz-github"]')
      .should('have.prop', 'href')
      .and('equal', 'https://github.com/lucbpz')

    cy.get('[data-test-id="adrserr-github"]')
      .should('have.prop', 'href')
      .and('equal', 'https://github.com/adrserr')
  })
})
