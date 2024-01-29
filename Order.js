import React, {useState, useEffect} from "react";
import {ORDERS_ENDPOINT} from "../../utils/APIEndpoints";
import axios from "axios";

function Order(props){
    const orderID = props.match.params.orderId;

    const [order, setOrder] = useState({
        id: "",
        customerName: "",
        orderDate: "",
        orderTime: "",
        amount: "",
        orderStatus: ""
    });

    const _getOrdersDetails = async ()=>{
        const {data} = await axios.get(`${ORDERS_ENDPOINT}/${orderId}`);
        setOrder(data);
        console.log(data);
    };
    useEffect(() =>{
        _getOrdersDetails();
    }, []);

    return(
        <div>
            <h1
               style={{textAlign: "left", marginLeft: "70px", marginButton: "0px"}}
            >
                Order Details
            </h1>
            <div style={{ display: "grid", marginLeft: "100px" }}>
        <table
          className="OrderTable"
          style={{
            width: "40%",
            backgroundColor: "#666",
            color: "white",
            marginButton: "250px",
            boxShadow: "5px 5px 20px  #666"
          }}
        >
          <tbody id="orders-table">
            <tr className="TableRow">
              <th>Detail</th>
              <th>Value</th>
            </tr>
            <tr className="TableRow">
              <td className="SecondaryText">Order ID</td>
              <td className="PrimaryText">{order.id}</td>
            </tr>

            <tr className="TableRow">
              <td className="SecondaryText">Customer Name</td>
              <td className="PrimaryText">{order.customerName}</td>
            </tr>

            <tr className="TableRow">
              <td className="SecondaryText">Order Date & Time</td>
              <td className="PrimaryText">
                {order.orderDate}
                <br />
                <span className="SecondaryText">{order.orderTime}</span>
              </td>
            </tr>

            <tr className="TableRow">
              <td className="SecondaryText">Amount</td>
              <td className="PrimaryText">{order.amount}</td>
            </tr>

            <tr className="TableRow">
              <td className="SecondaryText">Status</td>
              <td className="PrimaryText">{order.orderStatus}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Order;

