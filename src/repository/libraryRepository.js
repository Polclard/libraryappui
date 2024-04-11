import axios from "../custom-axios/axios";

const LibraryService = {
    fetchBooks: () => {
        return axios.get("/books")
    },
    fetchAuthors: () => {
        return axios.get("/authors");
    },
    fetchCountries: () => {
        return axios.get("/countries");
    },
    deleteBook: (id) => {
        return axios.post(`/books/deleteBook/${id}`);
    },
    addBook: (name, category, authorId, availableCopies) => {
        console.log(name, category, authorId, availableCopies)
        return axios.post("/books/addBook", {
            "name": name,
            "category": category,
            "authorId" : authorId,
            "availableCopies": availableCopies
        });
    },
    editBook: (id, name, category, authorId, availableCopies) => {
        return axios.post(`/books/editBook/${id}`, {
            "name": name,
            "category": category,
            "authorId" : authorId,
            "availableCopies": availableCopies
        });
    },
    getBook: (id) => {
        return axios.get(`/books/${id}`);
    },
    getAllCategories: () =>{
      return axios.get('/books/getAllCategories')
    },
    rentBook: (id) =>{
        return axios.post(`/books/rentCopyFromBook/${id}`)
    },
    // login: (username, password) => {
    //     return axios.post("/login", {
    //         "username": username,
    //         "password": password
    //     });
    // },
}

export default LibraryService;
