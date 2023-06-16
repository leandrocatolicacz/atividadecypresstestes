import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import CreateBook from './CreateBook';
describe('Book component', () => {
  beforeEach(() => {


    cy.mount(
      <Router >
        <CreateBook />
      </Router>
    );
  })
  it("Salvar um Livro", () => {
    cy.get("[data-cy=input-name]").type("Historinhas");
    cy.get("[data-cy=input-isbn]").type("828287887");
    cy.get("[data-cy=select-area]").select("HUMAN");
    cy.get("[data-cy=btn-salvar]").click();
    cy.get("[data-cy=btn-ver_todos]").click();
    cy.url().should("include", "/ListBooks")
  })

  it("Formulário Resetado", () => {
    cy.get("[data-cy=input-name]").type("Historinhas");
    cy.get("[data-cy=input-isbn]").type("00909009090");
    cy.get("[data-cy=select-area]").select("HUMAN");

    cy.get("[data-cy=input-name]").clear();
    cy.get("[data-cy=input-isbn]").clear();
    cy.get("[data-cy=select-area]").select(""); 

    cy.get("[data-cy=input-name]").should("have.value", "");
    cy.get("[data-cy=input-isbn]").should("have.value", "");
    cy.get("[data-cy=select-area]").should("have.value", "");
  });
  it("Exibição de mensagem de sucesso após o salvamento do livro", () => {

    cy.get("[data-cy=input-name]").type("História do Brasil");
    cy.get("[data-cy=input-isbn]").type("12342678905");
    cy.get("[data-cy=select-area]").select("HUMAN");
    cy.get("[data-cy=btn-salvar]").click();
  
    cy.contains("Livro cadastrado com sucesso!").should("exist");
  });
  it("Exibição de mensagem de erro após o salvamento do livro ja existente", () => {
    
    cy.get("[data-cy=input-name]").type("História do Brasil");
    cy.get("[data-cy=input-isbn]").type("12342678905");
    cy.get("[data-cy=select-area]").select("HUMAN");
  
    cy.get("[data-cy=btn-salvar]").click();
    cy.contains("Erro ao salvar livro!").should("exist");
  });
});