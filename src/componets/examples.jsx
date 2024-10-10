import { useState } from "react";
import { EXAMPLES } from "../data.js";

import TabButton from "./TabButton.jsx";
import Tabs from "../Tabs.jsx";
import Section from "../Section.jsx";

export default function Examples() {
  const [selectedButtonTopic, setSelectedButtonTopic] = useState();

  function handleChange(selectedButton) {
    setSelectedButtonTopic(selectedButton);
  }

  return (
    <Section title="Example" id="examples">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedButtonTopic == "Componets"}
              onClick={() => handleChange("Componets")}
            >
              Componets
            </TabButton>
            <TabButton
              isSelected={selectedButtonTopic == "Jsx"}
              onClick={() => handleChange("Jsx")}
            >
              Jsx
            </TabButton>
            <TabButton
              isSelected={selectedButtonTopic == "Props"}
              onClick={() => handleChange("Props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedButtonTopic == "State"}
              onClick={() => handleChange("State")}
            >
              State
            </TabButton>
          </>
        }
      >
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
      </Tabs>
    </Section>
  );
}
