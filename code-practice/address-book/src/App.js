import logo from './logo.svg';
import './App.css';
import { AddressDataSoureAPI } from './DataSourceAPI/address-datasource-api';
import CompanyList from './Components/CompanyList';

function App() {

  // Fetch - Get all the company records 
  

  return (
    <div className="App">
        <CompanyList />
    </div>
  );
}

export default App;
