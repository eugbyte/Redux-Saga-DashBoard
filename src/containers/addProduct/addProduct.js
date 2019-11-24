import React from 'react';
import styles from './addProduct.module.css';

import Navbar from "../../components/navbar/navbar.js";
import Form from "../../components/form/form.js";

const ProductForm = () => {
    
    return (
        <div>
            <Navbar/>
            <h1 className={styles.Center}>Add product</h1>
            <Form/>
        </div>
        
    )
}

export default ProductForm