import Navbar from './containers/Navbar.jsx';
import About from './containers/About.jsx';
import Education from './containers/Education.jsx';
import Experience from './containers/Experience.jsx';
import Projects from './containers/Projects.jsx';
import './App.css';


function App() {
  return (
    <div className="App" class="flex flex-col"> 
      <Navbar></Navbar>
      <About></About>
      <Education></Education>
      <Experience></Experience>
      <Projects></Projects>
    </div>


  );
}

export default App;