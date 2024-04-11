import React from 'react';
import {useNavigate} from 'react-router-dom';
import 'react-router-dom';

const   BookAdd = (props) => {

    const navigate = useNavigate();
    const [formData, updateFormData] = React.useState({
        name: "",
        category : "",
        authorId : 1,
        availableCopies : 1
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();

        const name = formData.name;
        const category = formData.category;
        const authorId = formData.authorId;
        const availableCopies = formData.availableCopies;

        props.onAddBook(name, category, authorId, availableCopies);
        navigate("/books");
    }

    return(
        <div className="row mt-5">
            <h1 className={"text-center"}>Add New Book</h1>
            <hr/>
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Book name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               required
                               placeholder="Enter product name"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="quantity">Available Copies</label>
                        <input type="number"
                               className="form-control"
                               id="availableCopies"
                               name="availableCopies"
                               placeholder="Available Copies"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <select name="category" className="form-control" onChange={handleChange}>
                            <option value={'NOVEL'}>{'NOVEL'}</option>
                            <option value={'THRILLER'}>{'THRILLER'}</option>
                            <option value={'HISTORY'}>{'HISTORY'}</option>
                            <option value={'FANTASY'}>{'FANTASY'}</option>
                            <option value={'BIOGRAPHY'}>{'BIOGRAPHY'}</option>
                            <option value={'CLASSICS'}>{'CLASSICS'}</option>
                            <option value={'DRAMA'}>{'DRAMA'}</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Authors</label>
                        <select name="authorId" className="form-control" onChange={handleChange}>
                            {props.authors.map((term) =>
                                <option key={term.id} value={term.id}>{term.name} {term.surname}</option>
                            )}
                        </select>
                    </div>
                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default BookAdd;