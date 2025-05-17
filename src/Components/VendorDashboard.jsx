import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './VendorDashboard.css'; // Import CSS for styling
import ProductBuilder from './ProductBuilder';
import InventoryManager from './InventoryManager';
import OrderManagement from './OrderManagement';
import CommunitySection from './CommunitySection';
import EarningsEscrowStatus from './EarningsEscrowStatus';
import NotificationSettings  from './NotificationSettings';

function VendorDashboard() {
  return (
    <div className="vendor-dashboard container-fluid">
      <div className="row">
        <aside className="dashboard-sidebar col-md-3 col-lg-2 bg-light p-3">
          <h3 className="mb-4 text-center">Vendor Dashboard</h3>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link className="nav-link" to="/vendor/dashboard/product-builder">Product Builder</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/vendor/dashboard/inventory">Inventory Manager</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/vendor/dashboard/orders">Order Management</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/vendor/dashboard/community">Community</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/vendor/dashboard/location">Location Sharing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/vendor/dashboard/earnings">Earnings & Escrow</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/vendor/dashboard/notifications">Notification Settings</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/vendor/dashboard/ai-chat">AI Chat Integration</Link>
            </li>
            {/* Add more navigation links here */}
          </ul>
        </aside>
        <main className="dashboard-content col-md-9 ms-sm-auto col-lg-10 p-4">
          <Outlet /> {/* Content of the child routes will be rendered here */}
          <ProductBuilder />
          <InventoryManager />
          <OrderManagement />
          <CommunitySection />
          <EarningsEscrowStatus />
          <NotificationSettings />
        </main>
      </div>
    </div>
  );
}

export default VendorDashboard;