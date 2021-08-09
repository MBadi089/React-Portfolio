import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import ContactForm from './components/Contact';

function App() {
const [categories] = useState([
  {
    name: "projects",
    description:
      "A list of Projects I have worked on during my Full-Stack Web Development Bootcamp with University of Texas At Austin",
  },
]);

const [currentCategory, setCurrentCategory] = useState(categories[0]);

return (
  <div>
    <Nav
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
    ></Nav>
    <main>
      <ContactForm></ContactForm>
        <Projects currentCategory={currentCategory}></Projects>
        <About></About>
    </main>
  </div>
);
}

export default App;
