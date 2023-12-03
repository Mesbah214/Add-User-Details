/* eslint-disable react/prop-types */

const Button = ({ type, label, clickHandler }) => {
  return (
    <div>
      <button onClick={clickHandler} type={type} className="button">
        {label}
      </button>
    </div>
  );
};

export default Button;
