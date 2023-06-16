import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import ListBooks from './ListBooks';
describe('Book component', () => {
  beforeEach(() => {


    cy.mount(
      <Router >
        <ListBooks />
      </Router>
    );
  })
  it("Verifica se o livro salvo esta na lista dos livros salvos", () => {
    cy.contains("12342678905").should("exist");
  });
  it("Verifica se o livro realmente foi excluido", () => {
    cy.get('[data-cy="btn-excluir(12342678905)"]')
      .click();
    cy.contains("12342678905").should("not.exist");
  });
  it("Verifica se o livro é marcado como emprestado", () => {
    cy.contains("Emprestado").should("exist");
  });
})