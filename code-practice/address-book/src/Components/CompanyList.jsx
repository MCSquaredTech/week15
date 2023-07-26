
import Company from './Company';

const CompanyList = ({companies =[], onClick}) => {
  
  const selectCompany = (company) => { 
    onClick(company);
  }

  let company;
    if(companies.length > 0) { 
      company = companies.sort((a, b) => { 
        return (a.company_name > b.company_name ? 1 : -1);
      }).map((company) => { 
        return <Company company={company} key={company.id} onClick={selectCompany} />
      });
    } 
  


  return (
    <div>
      { company }
    </div>
  )
}

export default CompanyList
