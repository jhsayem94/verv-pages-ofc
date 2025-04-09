import React, { useState } from 'react';

const CustomCardComponent = () => {

    
      function formatCardNumber(value) {
        return value
          .replace(/\D/g, "")
          .replace(/(.{4})/g, "$1 ")
          .trim();
      }
      
      function formatExpiry(value) {
        const cleaned = value.replace(/\D/g, "");
        const month = cleaned.slice(0, 2);
        const year = cleaned.slice(2, 4);
        return year ? `${month}/${year}` : month;
      }
      
        const [cardNumber, setCardNumber] = useState("");
        const [cardName, setCardName] = useState("");
        const [cardExpiry, setCardExpiry] = useState("");
        const [cardCVC, setCardCVC] = useState("");
    
        const handleSubmit = (e) => {
          e.preventDefault(); // Prevent page refresh
      
          // Collecting all card values
          const cardData = {
            number: cardNumber,
            name: cardName,
            expiry: cardExpiry,
            cvc: cardCVC,
          };
      
          console.log("Card Data Submitted:", cardData);
      
          // You can send this data to your backend/API here
          // Example: fetch('/api/payment', { method: 'POST', body: JSON.stringify(cardData) })
        };

    return (
        <div>
            <div className="max-w-sm mx-auto mt-10">
  

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow">
        <div>
          <label className="block text-sm font-medium">Card Number</label>
          <input
            type="text"
            maxLength="19"
            value={cardNumber}
            onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
            placeholder="1234 5678 9012 3456"
            className="mt-1 w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Card Holder</label>
          <input
            type="text"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            placeholder="John Doe"
            className="mt-1 w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="flex space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium">Expiry</label>
            <input
              type="text"
              maxLength="5"
              value={cardExpiry}
              onChange={(e) => setCardExpiry(formatExpiry(e.target.value))}
              placeholder="MM/YY"
              className="mt-1 w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium">CVC</label>
            <input
              type="text"
              maxLength="4"
              value={cardCVC}
              onChange={(e) => setCardCVC(e.target.value.replace(/\D/g, ""))}
              placeholder="123"
              className="mt-1 w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
        {/* Pay Button */}
        <button
          type="submit"
          className="w-full mt-4 bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Pay Now
        </button>
      </form>
    </div>
        </div>
    );
};

export default CustomCardComponent;