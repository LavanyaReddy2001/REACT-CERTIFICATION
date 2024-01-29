import {createStore, applyMiddleWare} from "redux";
import axios from "axios";
import thunk from "redux-thunk";

export const getOrders = () =>{
    return(dispatch) =>{
        axios
          .get(`https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders`)
          .then((res) =>{
            // console.log(res.data);
            dispatch({
                type: "GET_ORDERS",
                payload: res.data
            });
          });
    };
};
export const getProducts =()=>{
    return(dispatch) =>{
        axios
        .get('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products')
        .then((res) =>{
            // console.log(res.data);
            dispatch({
                type: "GET_PRODUCTS",
                payload: res.data
            });
        });
    };
};
export const getUsers =()=>{
    return(dispatch) =>{
        axios
        .get(`https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users`)
        .then((res) =>{
            // console.log(res.data);
            dispatch({
                type: "GET_USERS",
                payload: res.data
            });
        });
    };
};
export const increment ={type: "INC"};
const initialstate ={
    ordersData: [],
    productsData: [],
    usersData: []
};

const store = createStore(reducer, applyMiddleWare(thunk));

function reducer(state = initialstate, action){
    switch(action.type) {
        case "GET_ORDERS":
        // console.log("GET_ORDERS");
        return {...state, ordersData: action.payload};
        case "GET_PRODUCTS":
        // console.log("GET_PRODUCTS");
        return{...state, productsData: action.payload};
        case "GET_USERS":
        // console.log("GET_USERS");
        return{...state, usersData: action.payload};
        default:
            return{...state};
    }
}

export default store;
