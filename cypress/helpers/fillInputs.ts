const fillInputs = () => {
  cy.get('input[placeholder="Starting location"]')
    .click()
    .type('Brzeg')
    .get('li')
    .click();
  cy.get('input[placeholder="Destination"]')
    .click()
    .type('Paryz')
    .get('li')
    .click();
};

export default fillInputs;