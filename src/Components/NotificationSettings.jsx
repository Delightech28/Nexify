


import React from 'react';

function NotificationSettings() {
  const [pricePulseEnabled, setPricePulseEnabled] = React.useState(true);
  const [stockAlertsEnabled, setStockAlertsEnabled] = React.useState(true);

  const handlePricePulseChange = (e) => {
    setPricePulseEnabled(e.target.checked);
    // In a real application, you would handle the backend logic here
    console.log('Price Pulse toggled:', e.target.checked);
  };

  const handleStockAlertsChange = (e) => {
    setStockAlertsEnabled(e.target.checked);
    // In a real application, you would handle the backend logic here
    console.log('Stock Alerts toggled:', e.target.checked);
  };

  return (
    <div className="notification-settings">
      <h2>Notification Settings</h2>
      <p className="lead">Configure your notification preferences for price changes and low stock alerts.</p>
      <div className="form-check form-switch mb-2">
        <input
          className="form-check-input"
          type="checkbox"
          id="pricePulseToggle"
          checked={pricePulseEnabled}
          onChange={handlePricePulseChange}
        />
        <label className="form-check-label" htmlFor="pricePulseToggle">Price Pulse</label>
      </div>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          id="stockAlertsToggle"
          checked={stockAlertsEnabled}
          onChange={handleStockAlertsChange}
        />
        <label className="form-check-label" htmlFor="stockAlertsToggle">Stock Alerts</label>
      </div>
    </div>
  );
}

export default NotificationSettings;
