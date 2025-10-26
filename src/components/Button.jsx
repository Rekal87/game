function Button({ text, onClick, color }) {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
