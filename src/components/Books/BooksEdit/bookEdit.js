import React from 'react';
import {useNavigate} from 'react-router-dom';

const BookEdit = (props) => {
    const navigate = useNavigate();
    const [formData, updateFormData] = React.useState({
        name: "base_name",
        category : "",
        authorId : 0,
        availableCopies : 0
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name !== "base_name" ? formData.name : props.book.name;
        const category = formData.category !== "" ? formData.category : props.book.category
        const authorId = formData.authorId !== 0 ? formData.authorId : props.book.author.id;
        const availableCopies = formData.availableCopies !== 0 ? formData.availableCopies : props.book.availableCopies;
        // console.log("name: " + name);
        // console.log("category: " + category);
        // console.log("authorId: " + authorId);
        // console.log("availableCopies: " + availableCopies);
        props.onEditBook(props.book.id, name, category, authorId, availableCopies);
        navigate("/books");
    }

    return(
        <div className="row mt-5">
            <h1 className={"text-center"}>Edit Book with id {props.book.id}</h1>
            <hr/>
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Book name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               placeholder={props.book.name}
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="quantity">Available Copies</label>
                        <input type="number"
                               className="form-control"
                               id="availableCopies"
                               name="availableCopies"
                               placeholder={props.book.availableCopies}
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <select name="category" className="form-control" onChange={handleChange}>
                            <option selected={props.book.category === "NOVEL" ? "{true}" : undefined}
                                    value={'NOVEL'}>{'NOVEL'}</option>
                            <option selected={props.book.category === "THRILLER" ? "{true}" : undefined}
                                    value={'THRILLER'}>{'THRILLER'}</option>
                            <option selected={props.book.category === "HISTORY" ? "{true}" : undefined}
                                    value={'HISTORY'}>{'HISTORY'}</option>
                            <option selected={props.book.category === "FANTASY" ? "{true}" : undefined}
                                    value={'FANTASY'}>{'FANTASY'}</option>
                            <option selected={props.book.category === "BIOGRAPHY" ? "{true}" : undefined}
                                    value={'BIOGRAPHY'}>{'BIOGRAPHY'}</option>
                            <option selected={props.book.category === "CLASSICS" ? "{true}" : undefined}
                                    value={'CLASSICS'}>{'CLASSICS'}</option>
                            <option selected={props.book.category === "DRAMA" ? "{true}" : undefined}
                                    value={'DRAMA'}>{'DRAMA'}</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Author</label>
                        <select name="authorId" className="form-control" onChange={handleChange}>
                            {props.authors.map((term) => {
                                if (props.book.author !== undefined &&
                                    props.book.author.id === term.id)
                                    return <option key={term.id} selected={props.book.author.id}
                                                   value={term.id}>{term.name} {term.surname}</option>
                                else return <option key={term.id} value={term.id}>{term.name} {term.surname}</option>
                            })}
                        </select>
                    </div>
                    <button id="submit" type="submit" className="btn btn-primary mt-2">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default BookEdit;