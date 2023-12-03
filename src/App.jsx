import { useState } from "react";

import Form from "./components/Form";
import UserList from "./components/UserList";
import ErrorModal from "./components/ErrorModal";

import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  const errorHandler = (msg) => {
    setError(msg);
  };

  console.log(error)

  const addUser = (user) => {
    setUsers([{ id: Math.random(), ...user }, ...users]);
  };

  return (
    <>
      <Form onAddUser={addUser} onError={errorHandler} />
      <UserList list={users} />
      {/* <ErrorModal msg={} /> */}
    </>
  );
}

export default App;
