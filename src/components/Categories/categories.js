import React from "react";

const categories = (props) => {
    return (
        <div className={"container mm-4 mt-5"}>
            <h1 className={"text-center"}>All Categories</h1>
            <hr/>
            <div className={"row"}>
                <div className={"table-responsive"}>
                    <table className={"table table-striped"}>
                        <thead>
                        <tr>
                            <th scope={"col"}>Category Name</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.categories.map((term, index) => {
                            return (
                                <tr key={index}>
                                    <td>{term}</td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default categories;
