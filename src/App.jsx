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
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onchange={() => hendelchange("Componets")}>
              Componets
            </TabButton>
            <TabButton onchange={() => hendelchange("Jax")}>Jax</TabButton>
            <TabButton onchange={() => hendelchange("Props")}>Props</TabButton>
            <TabButton onchange={() => hendelchange("State")}>State</TabButton>
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
