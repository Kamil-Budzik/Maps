import fillInputs from '../helpers/fillInputs';

describe('Map', () => {
  it('renders error message when routes are not found', () => {
    cy.visit('/');

    cy.get('input[placeholder="Starting location"]')
      .click()
      .type('Brzeg')
      .get('li')
      .click();

    cy.get('input[placeholder="Destination"]')
      .click()
      .type('sdf')
      .get('li')
      .click();
    cy.contains('Generate the way').click();

    cy.contains('maps.app.help@gmail.com');
    cy.contains('Fill in the above data');
  });

  it('renders button and redirects user when data from input are not provided', () => {
    cy.visit('/map');

    cy.contains('Select location').click();
    cy.get('input[placeholder="Starting location"]');
  });

  it('hides summary until user fills in the data about car', () => {
    cy.visit('/');
    fillInputs();
    cy.contains('Generate the way').click();

    cy.contains('Fill in the above data');

    cy.contains('label', 'Fuel usage for 100km').click().type('7');
    cy.contains('label', 'Fuel price (for 1 liter)').click().type('6');

    cy.contains('Number of km: ');
    cy.contains('Download PDF');
  });
});

export {};