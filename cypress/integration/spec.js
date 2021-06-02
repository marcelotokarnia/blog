describe('Sapper template app', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('has the correct <h1>', () => {
    cy.contains('h1', 'Great success!')
  })

  it('navigates to /about', () => {
    cy.get('nav a').contains('about').click()
    cy.url().should('include', '/about')
  })

  it('navigates to /coding-blog', () => {
    cy.get('nav a').contains('coding-blog').click()
    cy.url().should('include', '/coding-blog')
  })
})
