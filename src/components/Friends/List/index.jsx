import React from "react";
import "./index.css"

const FriendList = ({ friends, selectedFriend, onSelectFriend }) => {
  return (
    <div className="friend-list">
      <h2>Friends</h2>
      {friends.map((friend) => (
        <div
          key={friend.id}
          className={`friend-item ${
            selectedFriend?.id === friend.id ? "selected" : ""
          }`}
          onClick={() => onSelectFriend(friend)}
        >
          <img src={friend.image} alt={friend.name} />
          <div>
            <p>{friend.name}</p>
            <p
              className={
                friend.balance > 0
                  ? "balance-positive"
                  : friend.balance < 0
                  ? "balance-negative"
                  : ""
              }
            >
              {friend.balance > 0
                ? `${friend.name} owes you ${friend.balance}€`
                : friend.balance < 0
                ? `You owe ${friend.name} ${Math.abs(friend.balance)}€`
                : `You and ${friend.name} are even`}
            </p>
          </div>
          <button className="close-btn">
            {selectedFriend?.name === friend.name ? "Close" : "Select"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default FriendList;
