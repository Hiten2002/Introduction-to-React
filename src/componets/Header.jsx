import reactimage from "../assets/react-core-concepts.png";
const nameDesc = ["Pavan", "Hiten", "Durvesh"];

function name(max) {
  return Math.floor(Math.random() * (max + 1));
}
const description = nameDesc[name(2)];

export default function Header() {
  return (
    <header>
      <img src={reactimage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}