import { LoginPage } from "../pageObjects/LoginPage";
import { TagsPage } from "../pageObjects/TagsPage";
import { PostsPage } from "../pageObjects/PostsPage";
import { DashboardPage } from "../pageObjects/DashboardPage";
import 'cypress-axe'


describe("Pruebas de accesibilidad", () => {
  const loginPage = new LoginPage();
  const tagsPage = new TagsPage();
  const postPage = new PostsPage();
  const dashboardPage = new DashboardPage();

  beforeEach(() => {
    cy.setCookie('ghost-admin-api-session', 'your-session-token');
    loginPage.visit();
    cy.wait(2000);
    loginPage.login(Cypress.env("USERNAME"), Cypress.env("PASSWORD"));
    cy.wait(3000);
    Cypress.on("uncaught:exception", (err, runnable) => {
      console.error("Uncaught exception", err);
      return false;
    });
  });
 
 
  it('E31-Prueba de accesibilidad en dashboard', () => {
    dashboardPage.goToDashboard();
    cy.injectAxe();
    cy.checkA11y(null, null, logViolations);
  });

  it('E32-Prueba de accesibilidad en posts', () => {
    postPage.goToPosts();
    cy.injectAxe();
    cy.checkA11y(null, null, logViolations);
  });

  it('E33-Prueba de accesibilidad en pages', () => {
    dashboardPage.goToPages();
    cy.injectAxe();
    cy.checkA11y(null, null, logViolations);
  });

  it('E34-Prueba de accesibilidad en tags', () => {
    tagsPage.goToTags();
    cy.injectAxe();
    cy.checkA11y(null, null, logViolations);
  });


});

function logViolations(violations) {
  cy.task('log', `${violations.length} violación(es) de accesibilidad detectadas`);
  const violationData = violations.map(({ id, impact, description, nodes }) => ({
    id,
    impact,
    description,
    nodes: nodes.length,
  }));
  cy.task('table', violationData);
};