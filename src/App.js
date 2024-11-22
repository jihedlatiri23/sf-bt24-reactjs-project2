import React, { useEffect, useState } from "react";
import "./App.css";
import AddFriendForm from "./components/Friends/Add";
import BillSplittingForm from "./components/Friends/Bill";
import FriendList from "./components/Friends/List";

const App = () => {
  const [friends, setFriends] = useState([
    { id: 1, name: "Clark", balance: 983, image: "https://i.pravatar.cc/48?1" },
    { id: 2, name: "Sarah", balance: 20, image: "https://i.pravatar.cc/48?2" },
    { id: 3, name: "Anthony", balance: 0, image: "https://i.pravatar.cc/48?3" },
  ]);

  const [selectedFriend, setSelectedFriend] = useState(null);
  const [billValue, setBillValue] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  const [payer, setPayer] = useState("You");

  const handleSelectFriend = (friend) => {
    if (selectedFriend?.id === friend?.id) {
      setSelectedFriend(null);
    } else {
      setSelectedFriend(friend);
    }
  };

  const handleSplitBill = () => {
    if (!billValue || !yourExpense) {
      alert("Please fill in all fields.");
      return;
    }

    const friendExpense = billValue - yourExpense;

    const updatedFriends = friends.map((friend) =>
      friend.id === selectedFriend.id
        ? {
            ...friend,
            balance:
              payer === "You"
                ? friend.balance + friendExpense
                : friend.balance - yourExpense,
          }
        : friend
    );

    setFriends(updatedFriends);
    setBillValue("");
    setYourExpense("");
    setSelectedFriend(null);
  };

  const handleAddFriend = (newFriend) => {
    setFriends([...friends, newFriend]);
  };

  useEffect(()=>{
    setTimeout(()=>{
      console.log('helllo')
    },100)
  },[])

  return (
    <div className="container">
      <div>
      <FriendList
        friends={friends}
        selectedFriend={selectedFriend}
        onSelectFriend={handleSelectFriend}
      />
      <AddFriendForm onAddFriend={handleAddFriend} />
      </div>
      <BillSplittingForm
        selectedFriend={selectedFriend}
        billValue={billValue}
        setBillValue={setBillValue}
        yourExpense={yourExpense}
        setYourExpense={setYourExpense}
        payer={payer}
        setPayer={setPayer}
        onSplitBill={handleSplitBill}
      />
    </div>
  )
};

export default App;
