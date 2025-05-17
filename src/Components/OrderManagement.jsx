
import React, { useState } from 'react';

function OrderManagement() {
  const [orders, setOrders] = useState([
    { id: 'ORDER123', customer: 'John Doe', date: '2025-05-17', status: 'Pending' },
    { id: 'ORDER456', customer: 'Jane Smith', date: '2025-05-16', status: 'Shipped' },
    // ... more orders
  ]);

  const handleUpdateStatus = (orderId, newStatus) => {
    setOrders(prevOrders =>
      prevOrders.map(order =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
    // In a real application, you would send this update to your backend
    console.log('Updated Order Status:', { orderId, newStatus });
  };

  return (
    <div className="order-management mt-5">
      <h2>Order Management</h2>
      <p className="lead">View and manage customer orders.</p>

      <table className="table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Order Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.date}</td>
              <td>
                <select
                  className="form-select form-select-sm"
                  value={order.status}
                  onChange={(e) => handleUpdateStatus(order.id, e.target.value)}
                >
                  <option value="Pending">Pending</option>
                  <option value="Processing">Processing</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </td>
              <td>
                <button className="btn btn-sm btn-outline-info">View Details</button> {/* You can enhance this */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* You can add filtering and sorting options */}
    </div>
  );
}

export default OrderManagement;