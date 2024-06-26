import React from 'react';
import ReactPaginate from 'react-paginate';
import {Link} from 'react-router-dom';
import BookTerm from "../../BookTerm/bookTerm";
import 'bootstrap/dist/css/bootstrap.css'

class Books extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            page: 0,
            size: 5
        }
    }

    render() {
        const offset = this.state.size * this.state.page;
        const nextPageOffset = offset + this.state.size;
        const pageCount = Math.ceil(this.props.books.length / this.state.size);
        const books = this.getBooksPage(offset, nextPageOffset);
        // console.log(books, pageCount)

        return (
            <div className={"container mm-4 mt-5"}>
                <h1 className={"text-center"}>All Books</h1>
                <hr/>
                <div className={"row"}>
                    <div className={"table-responsive"}>
                        <table className={"table table-striped"}>
                            <thead>
                            <tr>
                                <th scope={"col"}>Name</th>
                                <th scope={"col"}>Category</th>
                                <th scope={"col"}>Author Full Name</th>
                                <th scope={"col"}>Available Copies</th>
                            </tr>
                            </thead>
                            <tbody>
                            {books}
                            </tbody>
                        </table>
                    </div>
                    <div className="col mb-3">
                        <div className="row">
                            <div className="col-sm-12 col-md-12">
                                <Link className={"btn btn-block btn-dark"} to={"/books/addBook"}>Add new book</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"d-flex justify-content-center mt-5"}>
                    <ReactPaginate previousLabel={'Back'}
                                   nextLabel={"Next"}
                                   breakLabel={<a href="/#">...</a>}
                                   pageCount={pageCount}
                                   marginPagesDisplayed={2}
                                   pageRangeDisplayed={5}
                                   onPageChange={this.handlePageClick}
                                   breakClassName={'page-item'}
                                   breakLinkClassName={'page-link'}
                                   containerClassName={'pagination'}
                                   pageClassName={'page-item'}
                                   pageLinkClassName={'page-link'}
                                   previousClassName={'page-item'}
                                   previousLinkClassName={'page-link'}
                                   nextClassName={'page-item'}
                                   nextLinkClassName={'page-link'}
                                   activeClassName={'active'}/>

                </div>
            </div>

        )
    }

    handlePageClick = (data) => {
        let selected = data.selected;
        // console.log(selected)
        this.setState({
            page: selected
        })
    }

    getBooksPage = (offset, nextPageOffset) => {
        // console.log(offset, nextPageOffset)
        return this.props.books.map((term, index) => {
            return (
                <BookTerm key={index} term={term} onDelete={this.props.onDelete} onEdit={this.props.onEdit}
                          onRent={this.props.onRent}/>
            );
        }).filter((book, index) => {
            return index >= offset && index < nextPageOffset;
        })
    }
}

export default Books;