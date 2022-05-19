const fillInputs = () => {
  cy.get('input[placeholder="Początkowa lokalizacja"]')
    .click()
    .type('Brzeg')
    .get('li')
    .click();
  cy.get('input[placeholder="Cel podróży"]')
    .click()
    .type('Paryz')
    .get('li')
    .click();
};

export default fillInputs;