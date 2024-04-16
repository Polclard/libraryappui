import React from 'react';
import {useNavigate} from 'react-router-dom';
import 'react-router-dom';

const   AuthorAdd = (props) => {

    const navigate = useNavigate();
    const [formData, updateFormData] = React.useState({
        name: "",
        surname : "",
        countryId : 1
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
        const surname = formData.surname;
        const countryId = formData.countryId;

        props.onAddAuthor(name, surname, countryId);
        navigate("/authors");
    }

    return(
        <div className="row mt-5">
            <h1 className={"text-center"}>Add New Author</h1>
            <hr/>
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Author name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               required
                               placeholder="Enter author name"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="quantity">Author Surname</label>
                        <input type="text"
                               className="form-control"
                               id="surname"
                               name="surname"
                               placeholder="Author Surname"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Authors</label>
                        <select name="countryId" className="form-control" onChange={handleChange}>
                            {props.countries.map((term) =>
                                <option key={term.id} value={term.id}>{term.name} {term.continent}</option>
                            )}
                        </select>
                    </div>
                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AuthorAdd;