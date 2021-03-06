import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import ContactForm from './components/Contact';
import PhotoList from './components/PhotoList';



function App() {
const [categories] = useState([
  {
    name: "projects",
    description:
      "A list of Projects I have worked on during my Full-Stack Web Development Bootcamp",
  },
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
    <Projects currentCategory={currentCategory}>
    <PhotoList></PhotoList>
    </Projects>
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
