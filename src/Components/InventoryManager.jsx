import React, { useState } from 'react';

function InventoryManager() {
  const [inventory, setInventory] = useState([
    { id: 1, name: 'Custom Mug', stock: 50 },
    { id: 2, name: 'Personalized T-Shirt', stock: 100 },
    // ... more inventory items
  ]);

  const handleUpdateStock = (id, newStock) => {
    setInventory(prevInventory =>
      prevInventory.map(item =>
        item.id === id ? { ...item, stock: parseInt(newStock, 10) || 0 } : item
      )
    );
    // In a real application, you would send this update to your backend
    console.log('Updated Stock:', { id, newStock });
  };

  return (
    <div className="inventory-manager mt-5">
      <h2>Inventory Manager</h2>
      <p className="lead">Manage your stock levels.</p>

      <table className="table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Stock Level</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>
                <input
                  type="number"
                  className="form-control form-control-sm"
                  value={item.stock}
                  onChange={(e) => handleUpdateStock(item.id, e.target.value)}
                />
              </td>
              <td>
                <button className="btn btn-sm btn-outline-secondary">Update</button> {/* You can enhance this */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* You can add search functionality, low stock alerts display, etc. */}
    </div>
  );
}

export default InventoryManager;

