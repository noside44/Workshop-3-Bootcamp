import './App.css';
import { JobOffers } from './Componentes/JobOffers';
import { FJobPage } from './Componentes/JobPage';
import { jobs } from './Componentes/Jobs'
import { SearchBar } from './Componentes/SearchBar';
import { useState } from 'react';
import { Route, Routes, Link, Navigate, useLocation} from 'react-router-dom';

const Home = () => {
  let [searchValue, setSearchValue] = useState("");
 
  let findData = []
  if(!findData){
    findData = jobs
  }
  else{
    findData = jobs.filter ((element) => {
      return (element.ciudad.toLowerCase().includes(searchValue.toLowerCase()) || 
              element.puesto.toLowerCase().includes(searchValue.toLowerCase()) ||
              element.salario.toLowerCase().includes(searchValue.toLowerCase()) ||
              element.empresa.toLowerCase().includes(searchValue.toLowerCase())
            )   
    })
  }
  return(
    <div>
      <SearchBar 
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />
      {findData.map( item => 
      <JobOffers
        imagen={item.imagen}
        alt={item.imagen}
        key={item.id}
        vacancy={item.puesto}
        company={item.empresa}
        location={item.ciudad}
        salary={item.salario}
        vacancies={item.numVacante}
        published={item.fecha}
      />)}
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/jobPage' element={<JobPage />} />
      </Routes>
    </div>
    
  );
}

const JobPage = () => {
  return( 
    <FJobPage />
  ) 
}

function App() {
  const location = useLocation();

  if (location.pathname === '/') {
    return <Navigate to="/Home" />;
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/jobPage' element={<JobPage />} />
      </Routes>
    </div>
  );
}
export default App;