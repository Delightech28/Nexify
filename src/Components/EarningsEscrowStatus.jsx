import React, { useState, useEffect } from 'react';

function EarningsEscrowStatus() {
  const [earnings, setEarnings] = useState({ currentBalance: 1250.75, availableBalance: 980.50, pendingEscrow: 270.25 });
  const [transactions, setTransactions] = useState([
    { id: 1, date: '2025-05-17', type: 'Sale', amount: 55.00, status: 'Completed' },
    { id: 2, date: '2025-05-16', type: 'Withdrawal', amount: -200.00, status: 'Completed' },
    // ... more transactions
  ]);

  useEffect(() => {
    // In a real application, you would fetch earnings and transaction data from your backend
    console.log('Fetching earnings and transaction data');
  }, []);

  return (
    <div className="earnings-escrow-status mt-5">
      <h2>Earnings & Escrow Status</h2>
      <p className="lead">View your earnings and escrow information.</p>

      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Earnings Summary</h5>
          <p className="card-text">
            <strong>Current Balance:</strong> ${earnings.currentBalance.toFixed(2)}<br />
            <strong>Available Balance:</strong> ${earnings.availableBalance.toFixed(2)}<br />
            <strong>Pending Escrow:</strong> ${earnings.pendingEscrow.toFixed(2)}
          </p>
          <button className="btn btn-outline-success btn-sm">Withdraw Funds</button> {/* You can enhance this */}
        </div>
      </div>

      <h3>Transaction History</h3>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.date}</td>
              <td>{transaction.type}</td>
              <td>${transaction.amount.toFixed(2)}</td>
              <td>{transaction.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* You can add filtering and date range selection */}
    </div>
  );
}

export default EarningsEscrowStatus;