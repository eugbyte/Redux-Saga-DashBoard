import { takeEvery, takeLatest, put } from 'redux-saga/effects';

import axios from 'axios';
import {actionTypes} from "../store/actions/actions.js";

function * fetchShopAsync () {
    console.log("in fetchShopAsync generator");
    try {
        let res = yield axios.get("https://onlineshop-6116a.firebaseio.com/products/.json");
        let productArr = yield Object.values(res.data);
        yield put({ type: actionTypes.FETCHSHOPASYNC, productArr: productArr });
    } catch(err) {
        console.log(err);
    }
}

export function * fetchShop () {
    yield takeEvery("FETCHSHOP", fetchShopAsync);
}

