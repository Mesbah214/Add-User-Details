const ErrorModal = (msg) => {
  return (
    <div className="backdrop">
      <div className="modal">
        <div className="header">
          <h2>Invalid Input</h2>
        </div>

        <div className="content">
          <p>{msg}</p>
        </div>

      </div>
    </div>
  );
};

export default ErrorModal;
