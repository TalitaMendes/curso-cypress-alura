describe('Página de login', () => {
    it('Preencher os campos do login corretamente', () => {
      cy.visit('http://localhost:4200/#/home')
      cy.get('[data-test="loginUserName"]').type('talitat')
      cy.get('[data-test="loginPassword"]').type('teste123#')
      cy.contains('button','login').click();
    })
  })

