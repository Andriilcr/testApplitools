/// <reference types="cypress" />

describe('Applitools', () => {
    beforeEach(() => {
        cy.eyesOpen({
            appName: 'Applitools',
            testName: Cypress.currentTest.title,
        })
    })

    it('bla bla bla', () => {
        cy.visit('https://applitools.com/helloworld')
        // cy.visit('https://applitools.com/helloworld?diff1')

        // cy.contains('p', 'simulate additional differences.').next('p').then($ele => {
        //     cy.eyesCheckWindow({
        //         target: 'window',
        //         ignore: $ele,
        //         fully: true,
        //     })
        // })
            cy.eyesCheckWindow({
                target: 'window',
                fully: true,
            })


        cy.contains('button', 'Click me!').click()

        cy.contains('p', 'simulate additional differences.').next('p').then($ele => {
            cy.eyesCheckWindow({
                target: 'window',
                ignore: $ele,
                fully: true,
            })
        })
        // cy.eyesCheckWindow({
        //     target: 'window',
        //     fully: true,
        // })
    })

    // Ignoring element with number is not working properly and I still can't figure out how to ignore element with number...

    afterEach(() => {
        cy.eyesClose()
    })
})
