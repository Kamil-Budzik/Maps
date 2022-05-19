import fillInputs from '../helpers/fillInputs';

describe('Homepage', () => {
  it('Completes the form and renders map', () => {
    cy.visit('/');
    fillInputs();
    cy.contains('Wyznacz drogę').click();

    cy.contains('Spalanie paliwa na 100km').click().type('7');
    cy.contains('Cena za 1 litr paliwa').click().type('6');

    cy.get('button');
  });
});

export {};