import { useRef } from "react";

import Card from "./UI/Card";
import Button from "./UI/Button";

import "./Form.css";

const Form = ({ onAddUser, onError }) => {
  const usernameRef = useRef();
  const ageRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    if (usernameRef.current.value === "" || ageRef.current.value === "") {
      onError({
        title: "Invalid Inputs",
        message: "Please enter valid informations.",
      });

      return;
    } else if (ageRef < 1) {
      onError({
        title: "Invalid Age",
        message: "Age can not be 0 or negatives.",
      });

      return;
    }

    onAddUser({
      username: usernameRef.current.value,
      age: ageRef.current.value,
    });

    usernameRef.current.value = "";
    ageRef.current.value = "";
  };

  return (
    <Card className="input">
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" ref={usernameRef} />

        <label htmlFor="age">Age(years)</label>
        <input type="number" id="age" ref={ageRef} />

        <Button type={"submit"} label={"Add User"} />
      </form>
    </Card>
  );
};

export default Form;
