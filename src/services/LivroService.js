import axios from "axios";

const baseUrl = 'http://localhost:8081/'

export const getAll = () => {
    return axios.get(baseUrl + "librarian/allBooks")
}

export const saveBook = (book) => {
    return axios.post(baseUrl + "librarian/book", book)
}

export const deleteBook = (isbn) => {
    return axios.delete(baseUrl + "librarian/delete_book/"+isbn)
}

export const getByIsbn = (isbn) =>{
    return axios.put(baseUrl+"librarian/bookUpdate/"+isbn)
}