import React, { useState } from "react";
import "./index.css"

const AddFriendForm = ({ onAddFriend }) => {
  const [newFriendName, setNewFriendName] = useState("");
  const [newFriendImage, setNewFriendImage] = useState("");

  const handleAddFriend = () => {
    if (!newFriendName || !newFriendImage) {
      alert("Please provide both a name and an image URL.");
      return;
    }

    const newFriend = {
      id: Date.now(),
      name: newFriendName,
      balance: 0,
      image: newFriendImage,
    };

    onAddFriend(newFriend);
    setNewFriendName("");
    setNewFriendImage("");
  };

  return (
    <div className="friend-add">
      <label>
        👫 Friend Name
        <input
          type="text"
          value={newFriendName}
          onChange={(e) => setNewFriendName(e.target.value)}
        />
      </label>
      <label>
        🌄 Image URL
        <input
          type="text"
          value={newFriendImage}
          onChange={(e) => setNewFriendImage(e.target.value)}
        />
      </label>
      <button onClick={handleAddFriend}>Add</button>
    </div>
  );
};

export default AddFriendForm;
