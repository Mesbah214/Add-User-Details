import ReactDOM from "react-dom";

import Card from "./Card.jsx";
import Button from "./Button.jsx";

import "./ErrorModal.css";

const Backdrop = ({ onDismiss }) => {
  return <div className="backdrop" onClick={onDismiss} />;
};

const Modal = ({ title, message, onDismiss }) => {
  return (
    <Card className="modal">
      <header className="header">
        <h2>{title}</h2>
      </header>
      <div className="content">
        <p>{message}</p>
      </div>
      <footer className="actions">
        <Button label={"Okay"} clickHandler={onDismiss} />
      </footer>
    </Card>
  );
};

const ErrorModal = ({ title, message, onDismiss }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onDismiss={onDismiss} />,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(
        <Modal title={title} message={message} onDismiss={onDismiss} />,
        document.getElementById("modal")
      )}
    </>
  );
};

export default ErrorModal;
