import { BrowserRouter } from 'react-router-dom';
import { Navbar, Hero, About, Tech, Contact, StarsCanvas } from './components';
import { Suspense } from 'react';
import Project from './components/Project';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Project />
      </div>
    </BrowserRouter>
  );
};

export default App;
