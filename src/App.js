import './App.css';
import { JobOffers } from './Componentes/JobOffers';
import { jobs } from './Componentes/Jobs'
import { SearchBar } from './Componentes/SearchBar';
import { Navbar } from './Componentes/Navbar';
import { useState } from 'react';


function App() {

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
 

  return (
    <div className="App">
      <Navbar />
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
        ingles={item.ingles}
        remoto={item.remoto}
        capacitaciones={item.capacitaciones}
        ambiente={item.ambiente}
        flexible={item.flexible}
      />)}
    </div>
  );
}

export default App;
