/* eslint-disable no-undef */
describe('Buzzvel Application Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  describe('Desktop Tests', () => {
    beforeEach(() => {
      cy.viewport(1280, 720);
    });

    it('should render the landing page correctly and ensure particles are visible', () => {
      cy.get('.landing').should('be.visible');
      cy.get('.fade-in').contains("I'm Fernando Carretto");
      cy.get('.typewriter').should('contain.text', 'Software Developer');
      cy.get('#tsparticles').should('exist');
      cy.get('#tsparticles').should('be.visible');
      
      cy.wait(2000);
    });

    it('should navigate to the About section', () => {
      cy.get('nav').contains('About').click();
      cy.get('.about-header h2').should('have.text', 'About Me');
      cy.get('.about-image img').should('be.visible').and('have.attr', 'alt', 'Fernando Carretto');
      cy.get('.about-text').should('contain.text', 'Hello! I\'m Fernando');
      
      cy.scrollTo(0, 1000, { duration: 2000 });
      cy.wait(1000);
    });

    it('should navigate to the Portfolio section and interact with the slider', () => {
      cy.get('nav').contains('Portfolio').click();
      cy.get('.portfolio h2').should('have.text', 'Buzzvel Projects');
      
      cy.wait(1000); 
    });

    it('should navigate to the Timeline section', () => {
      cy.get('nav').contains('Timeline').click();
      cy.get('.timeline-container h2').should('have.text', 'Projected Career Timeline at Buzzvel');
      cy.get('#entry-top-year1').should('contain.text', 'Laying the Groundwork');
      
      cy.wait(2000);
    });
  });

  describe('Mobile Tests', () => {
    beforeEach(() => {
      cy.viewport('iphone-6');
    });

    it('should render the landing page correctly and ensure particles are visible on the landing page on mobile', () => {
      cy.get('.landing').should('be.visible');
      cy.get('.fade-in').contains("I'm Fernando Carretto");
      cy.get('.typewriter').should('contain.text', 'Software Developer');
      cy.get('#tsparticles').should('exist');
      cy.get('#tsparticles').should('be.visible');
      
      cy.wait(2000);
    });

    it('should open the mobile menu, navigate to the About section, and scroll to the bottom of the application', () => {
      cy.get('.hamburger').click();
      cy.get('.navbar-links-mobile').should('be.visible');
      cy.get('.navbar-links-mobile').contains('About').click();
      cy.get('.about-header h2').should('have.text', 'About Me');
      
      cy.wait(1000);

      cy.scrollTo('bottom', { duration: 4000 });
      cy.wait(1000);
    });
  });
});
