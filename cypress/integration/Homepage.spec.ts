import fillInputs from '../helpers/fillInputs';

describe('Homepage', () => {
  it('Completes the form and renders map', () => {
    cy.visit('/');
    fillInputs();
    cy.contains('Generate the way').click();

    cy.contains('Fuel usage for 100km').click().type('7');
    cy.contains('Fuel price (for 1 liter)').click().type('6');

    cy.get('button');
  });
});

export {};