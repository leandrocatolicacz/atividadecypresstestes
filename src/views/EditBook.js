import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Card from "./Card";
import { saveBook, getByIsbn} from "../services/LivroService";
import { messageErro, messageSuccess } from "../utils/toastr";
import NavBarItem from "./NavBarItem";

export default function EditBook() {

  let navigate = useNavigate();


  const {isbn} = useParams();

  const [book, setBooks] = useState({})

  useEffect(() =>{
     if(isbn){
      getByIsbn(isbn).then(response =>{
        setBooks(response.data)
      })
    } 
  },[isbn])

  function onChange(ev) {
    const { name, value } = ev.target
    setBooks({ ...book, [name]: value })
  }

  function resetForm() {
    setBooks({})
  }

  function onSubmit(ev) {
    ev.preventDefault();

    saveBook(book)
      .then(() => {
        messageSuccess("Livro cadastrado com sucesso!");
        resetForm();
      })

      .catch(erro => messageErro("Erro ao salvar livro"));
      resetForm();
  }


  function showAll() {
    navigate("/ListBooks")
  }

  return (
    <>
      <NavBarItem />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-9">
            <button type="button"
              onClick={showAll}
              className="btn btn-secondary mb-3">Ver todos</button>
            <Card titulo="Cadastro de Livros" className="mb-4">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Nome:</label>
                  <input
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
                  <label htmlFor="area">Área:</label>
                  <select
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
                  <button onClick={onSubmit} className="btn btn-primary btn-lg mt-3">
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
