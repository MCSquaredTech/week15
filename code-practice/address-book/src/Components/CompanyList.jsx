import React, { useState, useEffect } from 'react';
import { AddressDataSoureAPI } from '../DataSourceAPI/address-datasource-api.js';
import Company from './Company';

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);

  let getCompany = async () => { 
    setCompanies(await AddressDataSoureAPI.getAddress());
  }

  let selectCompany = (company) => { 

  }

  let company;
    if(companies.length > 0) { 
      company = companies.sort((a, b) => { 
        return (a.company_name > b.company_name ? 1 : -1);
      }).map((company) => { 
        return <Company company={company} key={company.id} onClick={selectCompany} />
      });
    } 
  
  useEffect(() => {
      console.log('useEffect');
      setCompanies(getCompany());
    }, []);

  return (
    <div>
      { company }
    </div>
  )
}

export default CompanyList
