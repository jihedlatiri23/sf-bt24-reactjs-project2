import React from "react";
import './index.css'

const BillSplittingForm = ({
  selectedFriend,
  billValue,
  setBillValue,
  yourExpense,
  setYourExpense,
  payer,
  setPayer,
  onSplitBill,
}) => {
  if (!selectedFriend) {
    return <h3>Please select a friend to split the bill.</h3>;
  }

  return (
    <div className="bill-splitting">
      <h2>Split a Bill with {selectedFriend.name}</h2>
      <label>
        💰 Bill value:
        <input
          type="number"
          value={billValue}
          onChange={(e) => setBillValue(Number(e.target.value))}
        />
      </label>
      <label>
        🧍 Your expense:
        <input
          type="number"
          value={yourExpense}
          onChange={(e) => setYourExpense(Number(e.target.value))}
        />
      </label>
      <label>
        🧍‍♂️ {selectedFriend.name}'s expense:
        <input type="number" value={billValue - yourExpense || ""} disabled />
      </label>
      <label>
        🌍 Who is paying the bill:
        <select value={payer} onChange={(e) => setPayer(e.target.value)}>
          <option value="You">You</option>
          <option value={selectedFriend.name}>{selectedFriend.name}</option>
        </select>
      </label>
      <button className="split-btn" onClick={onSplitBill}>
        Split bill
      </button>
    </div>
  );
};

export default BillSplittingForm;
