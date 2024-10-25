import logo from './logo.svg';
//import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"
import { Routes, Route, Link } from "react-router-dom"

import ClientList from './components/clients-list.component';
import AirportList from "./components/airport-list.component"
import DestinationList from "./components/destinations-list.component"
import FlightList from "./components/flight-list.component"
import TicketList from "./components/tickets-list.component"
import AirlineList from './components/airline-list.component';
import SaleList from "./components/sale-list.component"


function App() {
  return (
    <div className="App">
        <nav className="navbar navbar-expand navbar-dark bg-dark-subtle">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">Aerolinea</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                  </li>
                
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Cliente
                    </a>
                    <ul className="dropdown-menu">
                      <li> <Link to={"/search-client"} className="dropdown-item" >Buscar</Link> </li>
                      <li><a className="dropdown-item" href="#">Editar</a></li>
                      <li><a className="dropdown-item" href="#">Lista</a></li>
                    </ul>
                  </li>
                  
                </ul>
              </div>
            </div>
        </nav>
        {/* Component ClientList */}
        <div className='container'>
          <Routes>
            <Route path='/search-client' element={<ClientList/>} />

          </Routes>
        </div>

      
        

        
      </div>

       
   
 );
}

export default App;
