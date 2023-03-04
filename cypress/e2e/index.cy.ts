describe('HopsApp', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4000');
  });
  it('Website can be visited', () => {
    cy.contains('Welcome to HOPSapp!!!');
    cy.contains('A small app for designing your university studies.');
    cy.request('POST', 'http://localhost:4000/api/testing/reset');
  });

  it('About page can be viewed', () => {
    cy.get('#about-link').click();
    cy.contains('This app is created as a project for the Fullstack Open 2022 course');
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

  it('User can log in', () => {
    cy.login('HopTester', 'TesterPassword123!');
    cy.contains('Succesfully logged in as HopTester');
  });

  it('User can logout', () => {
    cy.login('HopTester', 'TesterPassword123!');
    cy.wait(5500);
    cy.get('#menu').click();
    cy.get('#logout').click();
    cy.contains('Succesfully logged out');
  });

  describe('Logged in', () => {
    beforeEach(() => {
      cy.login('HopTester', 'TesterPassword123!');
    });

    it('User can add a course', () => {
      cy.get('#hops-link').click();
      cy.get('#add-course-button').click();
      cy.get('#course-name-input').type('TestCourse1');
      cy.get('#course-code-input').type('TEST1');
      cy.get('#course-ects-input').type('5');
      cy.contains('year');
      cy.contains('startperiod');
      cy.contains('endperiod');
      cy.get('#create-button').click();
      cy.contains('Succesfully added the course TestCourse1');
      cy.contains('5 ects');
    });

    it('User can edit a course', () => {
      cy.get('#hops-link').click();
      cy.contains('5 ects').click();
      cy.get('#edit-course-button').click();
      cy.get('#course-ects-input').clear().type('4');
      cy.get('#create-button').click();
      cy.contains('Updated the course TestCourse1');
      cy.contains('4 ects');
    });

    it('User can remove a course', () => {
      cy.get('#hops-link').click();
      cy.contains('4 ects').click();
      cy.get('#remove-course-button').click();
      cy.contains('Succesfully removed the course TestCourse1');
    });
  });
});