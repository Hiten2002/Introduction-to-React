import { useState } from "react";

import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
import Header from "./componets/Header.jsx";
import CoreConcept from "./componets/CoreConcept.jsx";
import TabButton from "./componets/TabButton.jsx";

function App() {
  const [selectedButtonTopic, setselectedButtonTopic] = useState();

  function hendelchange(selectedButton) {
    setselectedButtonTopic(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map((coreitems) => (
              <CoreConcept key={coreitems.title} {...coreitems} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedButtonTopic == "Componets"}
              onchange={() => hendelchange("Componets")}
            >
              Componets
            </TabButton>
            <TabButton
              isSelected={selectedButtonTopic == "Jax"}
              onchange={() => hendelchange("Jax")}
            >
              Jax
            </TabButton>
            <TabButton
              isSelected={selectedButtonTopic == "Props"}
              onchange={() => hendelchange("Props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedButtonTopic == "State"}
              onchange={() => hendelchange("State")}
            >
              State
            </TabButton>
          </menu>
          {!selectedButtonTopic ? (
            <p>Plese select a Topic </p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedButtonTopic].title}</h3>
              <p>{EXAMPLES[selectedButtonTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedButtonTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
