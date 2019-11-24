import React from "react";

import { useSelector } from "react-redux";

const Shop = () => {
    const products = useSelector(reduxState => reduxState);

    let jsxProducts = products.map((product, index) => {
        return (
        <tr key={index}>
            <td>{product.title}</td>
            <td><img src={"images/" + product.image} height="80" width="82" alt="...img"/></td>
            <td>${product.price}</td>
            <td>{product.color}</td>
            <td><button className="btn btn-outline-primary">Edit</button></td>
            <td><button className="btn btn-outline-danger">Delete</button></td>
            
        </tr>
        )
    })

    return (
        <div>
            <table className="table table-bordered">
                <thead className="thead-light">
                    <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {jsxProducts}
                </tbody>
            </table>
        </div>
    )
}

export default Shop;