import React from 'react'
import Login from './Login'
import {mount} from 'cypress/react18'
import { BrowserRouter as Router } from 'react-router-dom';

describe('Login component', () => {
    beforeEach(() => {
      

      cy.mount(
        <Router >
            <Login />
        </Router>
    );
  });
  it('Entrar na aplicacao', () => {
    cy.get("[data-cy=input-username]").type("matias.neto.edu@gmail.com");
    cy.get("[data-cy=input-password]").type("juventus");
    cy.get("[data-cy=btn-Entrar]").click();
    cy.url().should("include", "/Home");
  });
  it('Limpar Formulario', () => {
    cy.get("[data-cy=input-username]").type("matias.neto.edu@gmail.com");
    cy.get("[data-cy=input-password]").type("juventus");
    cy.get("[data-cy=btn-limpar]").click();
    
  });
  it('Ir para a página de cadastro', () => {
    cy.get("[data-cy=btn-Cadastro]").click();
    cy.url().should("include", "/CreateUser");
  });

});
