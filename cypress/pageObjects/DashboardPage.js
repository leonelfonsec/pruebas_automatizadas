import { PostPage } from './TagsPage';

export class DashboardPage {
  visitSite() {
    cy.visit(Cypress.env('GHOST_SITE_URL'))
  }

  goToDashboard() {
    cy.visit(Cypress.env('GHOST_ADMIN_URL') + '#/dashboard')
    cy.wait(1000);
  }

  goToPages() {
    cy.visit(Cypress.env('GHOST_ADMIN_URL') + '#/pages')
    cy.wait(1000);
  }
}