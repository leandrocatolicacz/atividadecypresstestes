import React, { useEffect, useState } from "react";
import NavBarItem from "./NavBarItem";
import { getAll, deleteBook } from "../services/LivroService";
import { useNavigate } from "react-router-dom";
import { messageErro, messageSuccess } from "../utils/toastr";

export default function ListBooks() {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getAll()
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }, []);

  function cadBook() {
    navigate("/CreateBook");
  }

  function editBook(isbn) {
    navigate("/EditBook/" + isbn);
  }

  function removeBook(book) {
    deleteBook(book.isbn)
      .then(response => {
        messageSuccess("Livro removido com Sucesso!");
        getAll()
          .then(response => {
            setBooks(response.data);
          })
          .catch(error => {
            console.error("Error:", error);
          });
      })
      .catch(error => {
        if (error.response && error.response.status === 409) {
          messageErro("Não foi possível excluir o livro, pois ele está emprestado.");
        } else {
          messageErro("Erro ao deletar o Livro");
        }
      });
  }

  return (
    <>
      <NavBarItem />

      <div className="container mt-5">
        <div className="mb-3">
          <button type="button" onClick={cadBook} className="btn btn-secondary mb-3">
            Cadastrar
          </button>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Titulo</th>
              <th>ISBN</th>
              <th>Area</th>
              <th>Status</th>
              <th scope="col" className="text-center">
                Ação
              </th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {books.map(book => (
              <tr key={book.isbn}>
                <td>{book.name}</td>
                <td>{book.isbn}</td>
                <td>{book.area}</td>
                <td>{book.isAvailable ? "Disponível" : "Emprestado"}</td>
                <td>
                  <div className="text-center">
                    <button
                      className="btn btn-secondary me-4"
                      onClick={ev => editBook(book.isbn)}
                    >
                      Editar
                    </button>
                    <button 
                    data-cy={`btn-excluir(${book.isbn})`}
                    onClick={ev => removeBook(book)} className="btn btn-danger">
                      Excluir
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
