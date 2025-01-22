const Button = ({ text, color, children }) => {
  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  };

  return (
    <button
      //      onMouseEnter={onClickButton}
      onClick={onClickButton}
      style={{ color: color }}
    >
      {text} = {color.toUpperCase()}
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: "black",
};

export default Button;
