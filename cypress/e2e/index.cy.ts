describe('HopsApp without seed data', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4000');
  });
  it('Website can be visited', () => {
    cy.visit('http://localhost:4000');
    cy.contains('Welcome to HOPSapp!!!');
    cy.request('POST', 'http://localhost:4000/api/testing/reset');
  });

  it('User can signup', () => {
    cy.get('#signup-link').click();
    cy.contains('Signup to HOPS app');
    cy.contains('Username');
    cy.contains('Password');
    cy.get('#username-input').type('HopTester');
    cy.get('#name-input').type('Hops Tester');
    cy.get('#password-input').type('TesterPassword123!');
    cy.get('#submit').click();
    cy.contains('Succesfully signed up as HopTester');
  });

  it('User can log out', () => {
    cy.get('#menu').click();
  });
});