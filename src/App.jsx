import Contact from './components/Contact';
import Introduction from './components/Introduction';
import NavBar from './components/NavBar';
import Proyects from './components/Proyects';
import Skills from './components/Skills';

function App() {
  return (
    <main id="top">
      <NavBar></NavBar>
      <Introduction></Introduction>
      <Skills></Skills>
      <Proyects></Proyects>
      <Contact></Contact>
    </main>
  );
}

export default App;
