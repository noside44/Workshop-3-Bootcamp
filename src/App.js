import './App.css';
import { Navbar } from './Componentes/Navbar';
import { Aside } from './Componentes/Aside';
import { Home } from './Componentes/Home';
import { JobPage } from './Componentes/JobPage';
import { Route, Routes} from 'react-router-dom';



function App() {
  return(
    <div className='App'>
        <Navbar />
        <section className='main-jobs d-flex flex-row'>
          <Aside/>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='jobpage' element={<JobPage />} />    
             
            </Routes>
        </section>
    </div>
  )
}
export default App;
