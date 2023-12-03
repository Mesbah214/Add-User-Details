/* eslint-disable react/prop-types */
import { useState } from "react";

import Card from "./UI/Card";
import Button from "./UI/Button";

const initialUser = {
  username: "",
  age: "",
};

const Form = ({ onAddUser, onError }) => {
  const [user, setUser] = useState(initialUser);

  const submitHandler = (e) => {
    e.preventDefault();

    if (user.username === "" || user.age === "") {
      return onError("Please insert valid inputs");
    } else if (user.age < 1) {
      return onError("Ages can not be 0 or negative");
    }

    onAddUser(user);

    setUser(initialUser);
  };

  const inputChangeHandler = (input, value) => {
    setUser((prevState) => {
      return {
        ...prevState,
        [input]: value,
      };
    });
  };

  console.log(user.username);

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <div className="input">
          <label htmlFor="username">Username</label>
          <input
            onChange={(e) => inputChangeHandler("username", e.target.value)}
            value={user.username}
            type="text"
            id="username"
          />
        </div>

        <div className="input">
          <label htmlFor="age">Age(years)</label>
          <input
            onChange={(e) => inputChangeHandler("age", e.target.value)}
            value={user.age}
            type="number"
            id="age"
          />
        </div>

        <Button type={"submit"} label={"Submit"} />
      </form>
    </Card>
  );
};

export default Form;
