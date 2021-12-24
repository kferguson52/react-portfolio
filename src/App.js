import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import ContactForm from "./components/Contact";
import Resume from "./components/Resume"

function App() {
  const [categories] = useState([
    {
      name: "portfolio",
      description: "Collection of projects related to react",
    },
    { name: "resume", description: "Connect with me on LinkedIn!" },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
          <Resume currentCategory={currentCategory}></Resume>
            <About></About>
          </>
          
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
