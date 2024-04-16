import React from "react";
import {Link} from "react-router-dom";

const authors = (props) => {
    return (
        <div className={"container mm-4 mt-5"}>
            <h1 className={"text-center"}>All Authors</h1>
            <hr/>
            <div className={"row"}>
                <div className={"table-responsive"}>
                    <table className={"table table-striped"}>
                        <thead>
                        <tr>
                            <th scope={"col"}>Name</th>
                            <th scope={"col"}>Surname</th>
                            <th scope={"col"}>Country</th>
                            <th scope={"col"}>Continent</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.authors.map((term, index) => {
                            return (
                                <tr key={index}>
                                    <td>{term.name}</td>
                                    <td>{term.surname}</td>
                                    <td>{term.country.name}</td>
                                    <td>{term.country.continent}</td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                    <div className="col mb-3">
                        <div className="row">
                            <div className="col-sm-12 col-md-12">
                                <Link className={"btn btn-block btn-dark"} to={"/authors/addAuthor"}>Add new author</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default authors;
