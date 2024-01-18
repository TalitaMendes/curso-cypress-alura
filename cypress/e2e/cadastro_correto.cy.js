describe('Página de cadastro', () => {
  it('Preencher os campos do formulário corretamente para cadastrar novos usuarios', () => {
    cy.visit('http://localhost:4200/#/home')
    cy.contains('a','Register now').click();
    cy.get('[data-test="email"]').type('talita@email.com.br')
    cy.get('[data-test="fullName"]').type('Talita Teste')
    cy.get('[data-test="registerUserName"]').type('talitat')
    cy.get('[data-test="registerPassword"]').type('teste123#')
    cy.contains('button','Register').click();
  })
})