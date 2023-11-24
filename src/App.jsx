import React from "react";
import "./App.css";

import Profile from "./components/Profile";
import Statistics from "./components/Statistics";
import user from "../api/user.json";
import data from "../api/data.json";
import friends from "../api/friends.json";
import FriendList from "./components/FriendList";
import TransactionHistory from "./components/TransactionHistory";
import transactions from "../api/transactions.json";

const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
