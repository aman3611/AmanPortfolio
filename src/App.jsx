import {BrowserRouter} from 'react-router-dom';
import {About, Contact, Hero, Navbar, Tech, Works, Education} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat'>
          <Navbar />
          <Hero />
        </div>
        <div>
          <About />
          <Tech />
          <Education />
          <Works />
          <div className='relative z-0'>
            <Contact/>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
