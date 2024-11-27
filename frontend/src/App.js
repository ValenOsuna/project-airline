import logo from './logo.svg';
//import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"
import { Routes, Route, Link } from "react-router-dom"

import AirlineCreate from './components/airline-create.component';
import AirlineSearch from './components/airline-search.component';
import AirportCreate from './components/airport-create.component';
import AirplaneSearch from './components/airplane-search.component';
import AirportList from './components/airport-list.component';
import AirportSearch from "./components/airport-search.component";
import ClientCreate from './components/client-create.component';
import ClientList from './components/client-list.component';
import ClientSearch from './components/clients-search.component';
import DestinationCreate from './components/destination-create.component';
import DestinationList from './components/destinations-list.component';
import DestinationSearch from "./components/destinations-search.component";
import FlightCreate from './components/flight-create.component';
import FlightList from "./components/flight-list.component";
import FlightSearch from "./components/flight-search.component";
import SaleCreate from './components/sale-create.component';
import SaleList from './components/sale-list.component';
import SaleSearch from "./components/sale-search.component";
import TicketCreate from './components/ticket-create.component';
import TicketSearch from "./components/tickets-search.component";
import SaleMake from './components/sale-make.component';


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
                      Aerolinea
                    </a>
                    <ul className="dropdown-menu">
                      <li> <Link to={'/search-airline'} className="dropdown-item" >Buscar</Link> </li>
                      <li> <Link to={'/create-airline'} className="dropdown-item" >Crear</Link> </li>
                      <li><a className="dropdown-item" href="#">Editar</a></li>
                      <li><a className="dropdown-item" href="#">Lista</a></li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Aeropuerto
                    </a>
                    <ul className="dropdown-menu">
                      <li> <Link to={"/search-airport"} className="dropdown-item" >Buscar</Link> </li>
                      <li> <Link to={'/create-airport'} className="dropdown-item" >Crear</Link> </li>
                      <li><a className="dropdown-item" href="#">Editar</a></li>
                      <li> <Link to={"/airport-list"} className="dropdown-item" >Lista</Link> </li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Avión
                    </a>
                    <ul className="dropdown-menu">
                      <li> <Link to={"/search-airplane"} className="dropdown-item" >Buscar</Link> </li>
                      <li> <Link to={'/create-airport'} className="dropdown-item" >Crear</Link> </li>
                      <li><a className="dropdown-item" href="#">Editar</a></li>
                      <li> <Link to={"/airport-list"} className="dropdown-item" >Lista</Link> </li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Boleto
                    </a>
                    <ul className="dropdown-menu">
                      <li> <Link to={"/search-ticket"} className="dropdown-item" >Buscar</Link> </li>
                      <li> <Link to={"/create-ticket"} className="dropdown-item"> Crear </Link> </li>
                      <li><a className="dropdown-item" href="#">Editar</a></li>
                      <li><a className="dropdown-item" href="#">Lista</a></li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Cliente
                    </a>
                    <ul className="dropdown-menu">
                      <li> <Link to={"/search-client"} className="dropdown-item"> Buscar </Link> </li>
                      <li> <Link to={"/create-client"} className="dropdown-item"> Crear </Link> </li>
                      <li><a className="dropdown-item" href="#">Editar</a></li>
                      <li> <Link to={"/list-client"} className="dropdown-item"> Lista </Link> </li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Destino
                    </a>
                    <ul className="dropdown-menu">
                      <li> <Link to={"/search-destination"} className="dropdown-item"> Buscar </Link> </li>
                      <li> <Link to={"/create-destination"} className="dropdown-item"> Crear </Link> </li>
                      <li><a className="dropdown-item" href="#">Editar</a></li>
                      <li> <Link to={"/list-destination"} className="dropdown-item"> Lista </Link> </li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Venta
                    </a>
                    <ul className="dropdown-menu">
                      <li> <Link to={"/search-sale"} className="dropdown-item"> Buscar </Link> </li>
                      <li> <Link to={"/create-sale"} className="dropdown-item"> Crear </Link> </li>
                      <li> <Link to={"/make-sale"} className="dropdown-item"> Realizar Venta </Link> </li>
                      <li> <Link to={"/list-sale"} className="dropdown-item"> Lista </Link> </li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Vuelo
                    </a>
                    <ul className="dropdown-menu">
                      <li> <Link to={"/search-flight"} className="dropdown-item"> Buscar </Link> </li>
                      <li> <Link to={"/create-flight"} className="dropdown-item"> Crear </Link> </li>
                      <li><a className="dropdown-item" href="#">Editar</a></li>
                      <li><Link to={"/search-list"} className="dropdown-item"> Lista </Link></li>
                    </ul>
                  </li>

                  
                  
                </ul>
              </div>
            </div>
        </nav>
        {/* Component ClientList */}
        <div className='container'>
        <Routes>
            <Route path='/create-airline' element={<AirlineCreate/>} />
            <Route path='/create-airport' element={<AirportCreate/>} />
            <Route path='/create-client' element={<ClientCreate/>} />
            <Route path='/create-destination' element={<DestinationCreate/>} />
            <Route path='/create-flight' element={<FlightCreate/>} />
            <Route path='/create-sale' element={<SaleCreate/>} />
            <Route path='/create-ticket' element={<TicketCreate/>} />
            <Route path='/list-client' element={<ClientList/>} />
            <Route path='/airport-list' element={<AirportList/>} />
            <Route path='/list-destination' element={<DestinationList/>} />
            <Route path='/list-sale' element={<SaleList/>} />
            <Route path='/search-airline' element={<AirlineSearch/>} />
            <Route path='/search-airport' element={<AirportSearch/>} />
            <Route path='/search-airplane' element={<AirplaneSearch/>} />
            <Route path='/search-client' element={<ClientSearch/>} />
            <Route path='/search-destination' element={<DestinationSearch/>} />
            <Route path='/search-flight' element={<FlightSearch/>} />
            <Route path='/search-list' element={<FlightList/>} />
            <Route path='/search-sale' element={<SaleSearch/>} />
            <Route path='/search-ticket' element={<TicketSearch/>} />
            <Route path='/make-sale' element={<SaleMake/>} />
        </Routes>

        </div>

      
        

        
      </div>

       
   
 );
}

export default App;
