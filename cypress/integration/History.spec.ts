import fillInputs from '../helpers/fillInputs';

describe('History', () => {
  it('Add new record to the history', () => {
    const clickHistoryButton = () => cy.contains('Trips history').click();
    cy.visit('/');
    clickHistoryButton();
    cy.contains('Your history is empty');
    cy.contains('Select a route').click();

    fillInputs();
    cy.contains('Generate the way').click();

    cy.wait(1000);
    cy.contains('<-').click();
    clickHistoryButton();

    cy.contains('Brzeg, Woj. Opolskie, Polska');
  });
});

export {};