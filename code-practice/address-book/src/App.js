import logo from './logo.svg';
import './App.css';
import { AddressDataSoureAPI } from './DataSourceAPI/address-datasource-api';
import CompanyList from './Components/CompanyList';
import CompanyForm from './Components/CompanyForm';

const buttonStyle = {
  float: "right",
  fontSize: '18px',
  fontWeight: "800",
  color: "white",
};

const titleStyle = { 
  // display: 'inline-block',
  float: "left"

}

function App() {

  // Fetch - Get all the company records 
  const addCompany = () => { 
    console.log('button clicked');
  }

  const handleSave = (company) => { 
    console.log(company);
    AddressDataSoureAPI.postAddress(company); 
  }
  

  return (
    <div className="App">
      <div className='row'>
          <div className='col-sm-2 title' >   
            <p>Company<button className='btn' 
                style={buttonStyle}
                onClick={addCompany}><h3>+</h3></button></p>
          </div>
          <div className='row'> 
            <div className='col-sm-3'> 
              <CompanyList />
            </div>
            <div className='col-sm-4'> 
              <CompanyForm onSave={handleSave} />
            </div>
          </div>
               
        </div>
    </div>
  );
}

export default App;
