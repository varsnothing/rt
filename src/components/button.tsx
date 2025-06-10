export function Button({ children, onClick = () => {} }) {
  const handleClick = () => {
    onClick();
  };
  return (
    <button className="rt-button" onClick={handleClick}>
      {children}
    </button>
  );
}
