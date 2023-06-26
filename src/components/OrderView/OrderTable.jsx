import React from "react";

const OrderTable = ({ orders }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Delivery Type</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order?.orderId}>
            <td className=" text-center py-1">{order?.orderId}</td>
            <td className=" text-center py-1">{order?.customerName}</td>
            <td className=" text-center py-1">{order?.deliveryType}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrderTable;
