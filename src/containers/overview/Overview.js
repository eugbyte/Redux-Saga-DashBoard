import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {actionTypes} from '../../store/actions/actions.js';

import Shop from '../../components/shop/shop.js';
import styles from './Overview.module.css';
import NavBar from '../../components/navbar/navbar.js';

const Overview = () => {
    const dispatch = useDispatch();

    useEffect(()=> {
        console.log("inside useEffect");
        dispatch({ type: actionTypes.FETCHSHOP });
    }, []);

    let products = useSelector(reduxState => reduxState);
    console.log("shop", products);
    
    return (
        <div>
            <NavBar/>
            <h1 className={styles.Center}>Overview of Products</h1>
            <Shop/>
        </div>
    )
}

export default Overview;