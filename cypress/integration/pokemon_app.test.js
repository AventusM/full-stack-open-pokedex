describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    )

    cy.contains('chlorophyll').should('not.exist')
  })
  it('navigation should be possible to another page', function () {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur').click()

    cy.contains('chlorophyll')
  })
})
