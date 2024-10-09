export default function TabButton({ children, onchange, isSelected }) {

  return (
    <li>
      <button className={isSelected ? 'active' : undefined} onClick={onchange}>{children}</button>
    </li>
  );
}
