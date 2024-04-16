import './App.css';
import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css'
import LibraryService from "../../repository/libraryRepository";
import {Route, BrowserRouter as Router, Routes, Navigate} from "react-router-dom";
import Header from "../Header/header";
import Authors from "../Authors/authors";
import Countries from "../Countries/countries";
import BookEdit from "../Books/BooksEdit/bookEdit";
import Books from "../Books/BooksList/books";
import BookAdd from "../Books/BooksAdd/bookAdd";
import Categories from "../Categories/categories";
import AuthorAdd from "../Authors/AuthorsAdd/authorAdd";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            authors: [],
            countries: [],
            selectedBook: {},
            categories : []
        }
    }


    render() {
        return (
            <Router>
                <Header/>
                <main>
                    <div className="container">

                        <Routes>
                            <Route path="/authors" element={<Authors authors={this.state.authors}/>}/>
                            <Route path="/countries" element={<Countries countries={this.state.countries}/>}/>
                            <Route path="/books"
                                   element=
                                       {
                                           <Books
                                               books={this.state.books}
                                               onDelete={this.deleteBook}
                                               onEdit={this.getBook}
                                               onRent={this.rentBook}
                                           />
                                       }
                            />
                            <Route path="/"
                                   element=
                                       {
                                           <Books
                                               books={this.state.books}
                                               onDelete={this.deleteBook}
                                               onEdit={this.getBook}
                                               onRent={this.rentBook}
                                           />
                                       }
                            />
                            <Route path="/books/editBook/:id"
                                   element=
                                       {
                                           <BookEdit
                                               categories={this.state.categories}
                                               authors={this.state.authors}
                                               onEditBook={this.editBook}
                                               book={this.state.selectedBook}
                                           />
                                       }
                            />
                            <Route path="/books/addBook"
                                   element=
                                       {
                                           <BookAdd
                                               categories={this.state.categories}
                                               authors={this.state.authors}
                                               onAddBook={this.addBook}
                                           />
                                       }
                            />
                            <Route path="/categories"
                                   element=
                                       {
                                           <Categories
                                               categories = {this.state.categories}
                                           />
                                       }
                            />
                            <Route path="/authors/addAuthor"
                                   element=
                                       {
                                           <AuthorAdd
                                               onAddAuthor={this.addAuthor}
                                               countries={this.state.countries}
                                           />
                                       }
                            />
                            {/*<Route path={"/login"} exact render={() => <Login onLogin={this.fetchData}/>}/>*/}
                            {/*<Navigate to={"/books"}/>*/}
                        </Routes>
                    </div>
                </main>
            </Router>
        );
    }


    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        this.loadBooks();
        this.loadAuthors();
        this.loadCountries();
        this.getAllCategories();
    }

    loadBooks = () => {
        LibraryService.fetchBooks()
            .then((data) => {
                this.setState({
                    books: data.data
                })
            });
    }

    loadAuthors = () => {
        LibraryService.fetchAuthors()
            .then((data) => {
                this.setState({
                    authors: data.data
                })
            });
    }

    loadCountries = () => {
        LibraryService.fetchCountries()
            .then((data) => {
                this.setState({
                    countries: data.data
                })
            });
    }

    deleteBook = (id) => {
        LibraryService.deleteBook(id)
            .then(() => {
                this.loadBooks();
            });
    }

    addBook = (name, category, authorId, availableCopies) => {
        LibraryService.addBook(name, category, authorId, availableCopies)
            .then(() => {
                this.loadBooks();
            });
    }

    getBook = (id) => {
        LibraryService.getBook(id)
            .then((data) => {
                this.setState({
                    selectedBook: data.data
                })
            })
    }

    getAllCategories = () => {
        LibraryService.getAllCategories()
            .then((data) => {
                this.setState({
                    categories: data.data
                })
            })
    }

    rentBook = (id) => {
        if(LibraryService.getBook(id)
            .then((data) => {
               if(data.data.availableCopies >= 1)
               {
                   LibraryService.rentBook(id).then(() =>{
                       this.loadBooks();
                   });
               }
            })
        )
        this.loadBooks();
    }


    editBook = (id, name, category, authorId, availableCopies) => {
        LibraryService.editBook(id, name, category, authorId, availableCopies)
            .then(() => {
                this.loadBooks();
            });
    }

    addAuthor = (name, surname, countryId) =>{
        LibraryService.addAuthor(name, surname, countryId)
            .then(() => {
                this.loadAuthors();
            })
    }


}

export default App;
