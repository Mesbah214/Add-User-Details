import "./Button.css";

const Button = ({ type, label, clickHandler }) => {
  return (
    <div>
      <button onClick={clickHandler} type={type || "button"} className="button">
        {label}
      </button>
    </div>
  );
};

export default Button;
