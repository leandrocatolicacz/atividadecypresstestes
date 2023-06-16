import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Card from "./Card";
import { saveBook, getByIsbn } from "../services/LivroService";
import { messageErro, messageSuccess } from "../utils/toastr";
import NavBarItem from "./NavBarItem";

export default function CreateBook() {
  const navigate = useNavigate();
  const { isbn } = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    if (isbn) {
      getByIsbn(isbn)
        .then(response => {
          setBook(response.data);
        })
        .catch(error => {
          console.error("Erro ao obter livro por ISBN:", error);
        });
    }
  }, [isbn]);

  function onChange(event) {
    const { name, value } = event.target;
    setBook({ ...book, [name]: value });
  }

  function resetForm() {
    setBook({});
  }

  function onSubmit(event) {
    event.preventDefault();

    saveBook(book)
      .then(() => {
        messageSuccess("Livro cadastrado com sucesso!");
        resetForm();
        navigate("/ListBooks");
      })
      .catch(error => {
        messageErro("Erro ao salvar livro!");
        console.error("Erro ao salvar livro:", error);
      });
  }

  return (
    <>
      <NavBarItem />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-9">
            <button
              data-cy="btn-ver_todos"
              type="button"
              onClick={() => navigate("/ListBooks")}
              className="btn btn-secondary mb-3"
            >
              Ver todos
            </button>
            <Card titulo="Cadastro de Livros" className="mb-4">
              <form onSubmit={onSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nome:</label>
                  <input
                    data-cy="input-name"
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={book.name || ""}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="isbn">ISBN:</label>
                  <input
                  data-cy="input-isbn"
                    type="text"
                    className="form-control"
                    id="isbn"
                    name="isbn"
                    value={book.isbn || ""}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="area">Área:</label>
                  <select
                  data-cy="select-area"
                    className="form-control"
                    id="area"
                    name="area"
                    value={book.area || ""}
                    onChange={onChange}
                    required
                  >
                    <option value="">Selecione a Área</option>
                    <option value="HUMAN">Humanas</option>
                    <option value="EXACT_SCIENCES">Exatas</option>
                  </select>
                </div>

                <div className="d-flex justify-content-center">
                  <button data-cy="btn-salvar" type="submit" className="btn btn-primary btn-lg mt-3">
                    Salvar
                  </button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
