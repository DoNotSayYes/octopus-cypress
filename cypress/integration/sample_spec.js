describe('My fist test', () => {
    it('Visit a real page', () => {
        cy.visit('https://www.baidu.com')

        cy.contains('百度一下').click()

        cy.url().should('include', 'baidu')

        cy.get('.s_ipt')
          .type('OK')
          .should('have.value', 'OK')
    })
})




