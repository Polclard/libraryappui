import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


const bookTerm = (props) => {
    return (
        <tr>
            <td className={props.term.availableCopies <= 0 ? "bg-danger": ""}>{props.term.name}</td>
            <td className={props.term.availableCopies <= 0 ? "bg-danger": ""}>{props.term.category}</td>
            <td className={props.term.availableCopies <= 0 ? "bg-danger": ""} >{props.term.author.name} {props.term.author.surname}</td>
            <td className={props.term.availableCopies <= 0 ? "bg-danger": ""} >{props.term.availableCopies}</td>
            <td className={"text-right"}>
                <a title={"Delete"} className={"btn btn-danger"}
                   onClick={() => props.onDelete(props.term.id)}>
                    Delete
                </a>

                    <a style={{display: props.term.availableCopies <= 0 ? "none" : ""}} title={"Rent A Copy"} className={"btn btn-success"}
                       onClick={() => props.onRent(props.term.id)}>
                        Rent A Book
                    </a>
                <Link className={"btn btn-info ml-2"}
                      onClick={() => props.onEdit(props.term.id)}
                      to={`/books/editBook/${props.term.id}`}>
                Edit
                </Link>
            </td>
        </tr>
    )
}

export default bookTerm;