import React from 'react'

const addressStyle = { 
  display: 'flex',
  flexDirection: 'column',
  float: 'left',
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  fontWeight: "200", 
  textAlign: "start"
}

const addressStyleBold = { 
  display: 'flex',
  flexDirection: 'column',
  float: 'left', 
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  fontWeight: "400", 
  textAlign: "start",
  width: "100%",
  cursor: 'pointer'
}

const Company = ({ onClick, company={} }) => {
  const item = company;
  const {company_name} = company;

  const handleSelect = () => { 
    return onClick(item);
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm-12'>
          <div style={addressStyleBold} onClick={handleSelect}>{company_name}</div>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm'> 
        <div style={addressStyle}>{}</div>
        </div>
      </div>
          
        
    </div>
  )
}

export default Company;
