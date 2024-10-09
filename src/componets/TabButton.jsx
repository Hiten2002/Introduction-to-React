export default function TabButton({ children, onchange }) {

  return (
    <li>
      <button onClick={onchange}>{children}</button>
    </li>
  );
}
