import React from 'react';
import {Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

const header = (props) => {
    // let authenticate
    // if (localStorage.getItem("JWT")) {
    //     authenticate = (<button className="btn btn-outline-info my-2 my-sm-0"
    //                             onClick={() => localStorage.removeItem("JWT")}>Logout</button>);
    // } else {
    //     authenticate = (<Link className="btn btn-outline-info my-2 my-sm-0" to={"/login"}>Login</Link>);
    // }

    return (


        <header>

            <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="width: 100%">
                <Container className={"m-0"}>
                    <Navbar.Brand href="/">Library Application</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className="nav-link" to={"/books"}>Books</Link>
                            <Link className="nav-link" to={"/authors"}>Authors</Link>
                            <Link className={"nav-link"} to={"/countries"}>Countries</Link>
                            <Link className={"nav-link"} to={"/categories"}>Categories</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


            {/*<nav className="navbar navbar-expand-md navbar-dark navbar-fixed bg-dark">*/}
            {/*    <a className="navbar-brand" href="/">Library Application</a>*/}
            {/*    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"*/}
            {/*            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">*/}
            {/*        <span className="navbar-toggler-icon"></span>*/}
            {/*    </button>*/}
            {/*    <div className="collapse navbar-collapse" id="navbarNav">*/}
            {/*        <ul className="navbar-nav mr-auto">*/}
            {/*            <li className="nav-item active">*/}
            {/*                <Link className="nav-link" to={"/books"}>Books</Link>*/}
            {/*            </li>*/}
            {/*            <li className="nav-item active">*/}
            {/*                <Link className="nav-link" to={"/authors"}>Authors</Link>*/}
            {/*            </li>*/}
            {/*            <li className="nav-item active">*/}
            {/*                <Link className={"nav-link"} to={"/countries"}>Countries</Link>*/}
            {/*            </li>*/}
            {/*            <li className="nav-item active">*/}
            {/*                <Link className={"nav-link"} to={"/categories"}>Categories</Link>*/}
            {/*            </li>*/}
            {/*        </ul>*/}
            {/*        /!*<form className="form-inline mt-2 mt-md-0 ml-3">*!/*/}
            {/*        /!*    {authenticate}*!/*/}
            {/*        /!*</form>*!/*/}
            {/*    </div>*/}
            {/*</nav>*/}
        </header>
    )
}

export default header;