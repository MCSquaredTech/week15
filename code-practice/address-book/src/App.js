import { useState, useEffect } from 'react';
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
  const [ deleteItem, setDeleteItem ] = useState(false);
  const [companies, setCompanies] = useState([]);
  const [ company, setCompany ]  = useState({
    company_name: '', 
    address1: '',
    address2: '', 
    city: '',
    state: '',
    zip: '',
    id: ''
  });

  // Fetch - Get all the company records 
  const newCompany = () => { 
    setCompany({
      company_name: '', 
      address1: '',
      address2: '', 
      city: '',
      state: '',
      zip: '',
      id: ''
    });
  }

  const handleSave = async (company) => { 
      if(company.id === '') {
        await AddressDataSoureAPI.postAddress(company);
      } else { 
        await AddressDataSoureAPI.putAddressByID(company);
      }
      setDeleteItem(false);
      getCompany();
  }
  
  const handleDelete = async (item) => { 
    setCompany(item);
    await AddressDataSoureAPI.deleteAddress(company);
    getCompany();
  }
  const handleSelect = (item) => {
    setCompany(item);
    setDeleteItem(true);
    console.log(company);
  }

  let getCompany = async () => { 
    setCompanies(await AddressDataSoureAPI.getAddress());
  }

  useEffect(() => {
      getCompany();
  }, []);

  return (
    <div className="App">
      <div className='row'>
          <div className='col-sm-2 title' >   
            <p>Company<button className='btn' 
                style={buttonStyle}
                onClick={newCompany}>new</button>
            <button className='btn'
                style={buttonStyle}
                disabled={!deleteItem}
                onClick={handleDelete}>delete</button>         
            </p>
          </div>
          
          <div className='row'> 
            <div className='col-sm-3'> 
              <CompanyList companies={companies} onClick={handleSelect} />
            </div>
            <div className='col-sm-4'> 
              <CompanyForm company={company} key={company.id} onSave={handleSave} />
            </div>
          </div>
               
        </div>
    </div>
  );
}

export default App;
