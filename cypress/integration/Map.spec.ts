import fillInputs from '../helpers/fillInputs';

describe('Map', () => {
  it('renders error message when routes are not found', () => {
    cy.visit('/');

    cy.get('input[placeholder="Początkowa lokalizacja"]')
      .click()
      .type('Brzeg')
      .get('li')
      .click();

    cy.get('input[placeholder="Cel podróży"]')
      .click()
      .type('sdf')
      .get('li')
      .click();
    cy.contains('Wyznacz drogę').click();

    cy.contains('maps.app.help@gmail.com');
    cy.contains('Wypełnij powyższe dane');
  });

  it('renders button and redirects user when data from input are not provided', () => {
    cy.visit('/map');

    cy.contains('Wybierz lokalizację').click();
    cy.get('input[placeholder="Początkowa lokalizacja"]');
  });

  it('hides summary until user fills in the data about car', () => {
    cy.visit('/');
    fillInputs();
    cy.contains('Wyznacz drogę').click();

    cy.contains('Wypełnij powyższe dane');

    cy.contains('label', 'Spalanie paliwa na 100km').click().type('7');
    cy.contains('label', 'Cena za 1 litr paliwa').click().type('6');

    cy.contains('Ilość km: ');
    cy.contains('Dowload PDF');
  });
});

export {};