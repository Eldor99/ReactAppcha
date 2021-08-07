import React from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const userList = [{ name: "Eldor", age: 22 },{ name: "Brad", age: 32 },{ name: "Jane", age: 18 }];

function App() {
  return (
    <div>
      <AddUser />
      <UsersList users={userList} />
    </div>
  );
}

export default App;
