/// <reference types="cypress" />

describe('Applitools', () => {

    // This method performs setup before each test.
    beforeEach(() => {

        // Open Eyes to start visual testing.
        // Each test should open its own Eyes for its own snapshots.
        cy.eyesOpen({
            
            // The name of the application under test.
            // All tests for the same app should share the same app name.
            // Set this name wisely: Applitools features rely on a shared app name across tests.
            appName: 'Applitools',
            
            // The name of the test case for the given application.
            // Additional unique characteristics of the test may also be specified as part of the test name,
            // such as localization information ("Home Page - EN") or different user permissions ("Login by admin"). 
            testName: Cypress.currentTest.title,
        })
    })

    it('bla bla bla', () => {
        cy.visit('https://applitools.com/helloworld?diff1')
        cy.contains('p', 'simulate additional differences.').next('p').then($elemToIgnore => {
            cy.eyesCheckWindow({
                ignore: $elemToIgnore
            })
        })
        cy.eyesCheckWindow({
            target: 'window',
            fully: true
        })
        cy.contains('button', 'Click me!').click()
        //screenshot
        cy.eyesCheckWindow({
            target: 'window',
            fully: true
        })
    })

    afterEach(() => {
        cy.eyesClose()
    })
})
