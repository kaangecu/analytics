import { DateTime } from "luxon";

describe('renders chartspage', () => {
  it('renders topbar', () => {
    cy.visit("/")
    cy.get("#topbar").should("exist")
  });

  it('when button is clicked it should set the time accordingly', () => {
    cy.visit("/")
    cy.get('.btn').click();
    cy.get('#mui-6').should('have.value', DateTime.now().toFormat("D t"));
    cy.get('#mui-5').should('have.value', DateTime.now().plus({ minutes: -30 }).toFormat("D t"));
  });
  
});
