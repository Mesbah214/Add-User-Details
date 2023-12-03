import { useState } from "react";

import Form from "./components/Form";
import UserList from "./components/UserList";
import ErrorModal from "./components/UI/ErrorModal.jsx";

import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  const errorHandler = (obj) => {
    setError(obj);
  };

  const modalHandler = () => {
    setError(null);
  };

  const addUser = (user) => {
    setUsers((prevState) => {
      return [...prevState, { id: Math.random(), ...user }];
    });
  };

  return (
    <>
      <Form onAddUser={addUser} onError={errorHandler} />
      <UserList list={users} />
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onDismiss={modalHandler}
        />
      )}
    </>
  );
}

export default App;
