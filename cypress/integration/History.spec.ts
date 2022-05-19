import fillInputs from '../helpers/fillInputs';

describe('History', () => {
  it('Add new record to the history', () => {
    const clickHistoryButton = () => cy.contains('Historia tras').click();
    cy.visit('/');
    clickHistoryButton();
    cy.contains('Twoja historia jest pusta');
    cy.contains('Powrót').click();

    fillInputs();
    cy.contains('Wyznacz drogę').click();

    cy.wait(1000);
    cy.contains('<-').click();
    clickHistoryButton();

    cy.contains('Brzeg, Woj. Opolskie, Polska');
  });
});

export {};