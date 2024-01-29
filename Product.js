import React, {useState, useEffect} from "react";
import {PRODUCTS_ENDPOINT} from "../../utils/APIEndpoints";
import axios from "axios";

function Product(props){
    const productId = props.match.params.productId;

    const [product, setProduct] = useState({
        id: "",
        medicineName: "",
        medicineBrand: "",
        stock: "",
        unitPrice: "",
        expiryDate: "",
        prescriptionRequired: ""
    });

    const _getProductsDetails = async()=>{
        const {data} = await axios.get(`${PRODUCTS_ENDPOINT}/${productId}`);
        setProduct(data);
        console.log(data);
    };
    useEffect(() =>{
        _getProductsDetails();
    }, []);

    return(
        <div style={{marginButton: "200px"}}>
            <h1
               style={{textAlign: "left", marginLeft: "70px", marginButton: "0px"}}
            >
                Product Details
            </h1>
            <div style={{display: "grid", marginLeft: "100px"}}>
                <table
                    className="OrderTable"
                    style={{
                        width: "40%",
                        backgroundColor: "#666",
                        color: "white",
                        marginButton: "250px",
                        boxShadow: "5px 5px 20px #666"
                    }}
                >
                    <tbody id="orders-table">
                        <tr className="TableRow">
                            <th>Detail</th>
                            <th>Value</th>
                        </tr>
                        <tr className="TableRow">
                            <td className="SecondaryText">Product ID</td>
                            <td className="PrimaryText">{product.medicineName}</td>
                        </tr>

                        <tr className="TableRow">
                            <td className="SecondaryText">Medicine Name</td>
                            <td className="PrimaryText">{product.medicineBrand}</td>
                        </tr>

                        <tr className="TableRow">
                            <td className="SecondaryText">Medicine Brand</td>
                            <td className="PrimaryText">{product.stock}</td>
                        </tr>

                        <tr className="TableRow">
                            <td className="SecondaryText">Unit Price</td>
                            <td className="PrimaryText">{product.unitPrice}</td>
                        </tr>

                        <tr className="TableRow">
                            <td className="SecondaryText">Expiry Date</td>
                            <td className="PrimaryText">{product.expiryDate}</td>
                        </tr>

                        <tr className="TableRow">
                            <td className="SecondaryText">prescription Required</td>
                            <td className="PrimaryText">
                                {product.prescriptionRequired == true ? "Yes" : "No"}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Product;
