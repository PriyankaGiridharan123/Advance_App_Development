import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Payment.css';

const PaymentPage = () => {
  const [modeOfPayment, setModeOfPayment] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [paymentDate, setPaymentDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!modeOfPayment || !cardNumber || !cvv || !expiryDate || !totalAmount || !paymentDate) {
      alert("Please fill in all the fields");
      return;
    }

    if (cardNumber.length < 14 || cardNumber.length > 16) {
      alert("Card number must be between 14 and 16 characters");
      return;
    }

    if (cvv.length !== 3) {
      alert("CVV must be 3 characters long");
      return;
    }

    console.log("Payment submitted successfully!");
  };

  return (
    <div className="payment-container">
      <h1>Payment Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Mode of Payment:</label>
          <div className="radio-buttons">
            <label>
              <input
                type="radio"
                value="Credit Card"
                checked={modeOfPayment === 'Credit Card'}
                onChange={() => setModeOfPayment('Credit Card')}
              />
              Credit Card
            </label>
            <label>
              <input
                type="radio"
                value="Debit Card"
                checked={modeOfPayment === 'Debit Card'}
                onChange={() => setModeOfPayment('Debit Card')}
              />
              Debit Card
            </label>
          </div>
        </div>
        <div className="form-group">
          <label>Card Number:</label>
          <input
            type="text"
            placeholder="Enter card number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            maxLength={16}
          />
        </div>
        <div className="form-group">
          <label>CVV:</label>
          <input
            type="text"
            placeholder="Enter CVV"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            maxLength={3}
          />
        </div>
        <div className="form-group">
          <label>Expiry Date:</label>
          <input
            type="date"
            placeholder="Enter expiry date"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Total Amount:</label>
          <input
            type="text"
            placeholder="Enter total amount"
            value={totalAmount}
            onChange={(e) => setTotalAmount(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Payment Date:</label>
          <input
            type="date"
            placeholder="Enter payment date"
            value={paymentDate}
            onChange={(e) => setPaymentDate(e.target.value)}
          />
        </div>
        <div className="button-group">
          <button type="submit" className="submit-btn">Proceed Payment</button>
          <Link to="/" className="cancel-btn">Cancel</Link>
        </div>
      </form>
    </div>
  );
};

export default PaymentPage;
