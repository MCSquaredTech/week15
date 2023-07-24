import React from 'react'

const addressStyle = { 
  display: 'flex',
  flexDirection: 'column',
  float: 'left',
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  fontWeight: "400", 
  textAlignment: "start",
}

const addressStyleBold = { 
  display: 'flex',
  flexDirection: 'column',
  float: 'left', 
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  fontWeight: "800", 
  textAlignment: "start",
  cursor: 'pointer'
}

const Company = (props) => {
  const {company_name, address1, address2, city, state, zip } = props.company;
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <div style={addressStyleBold}>{company_name}</div>
        </div>
      </div>
      <div className='row'>
        <div className='col'> 
        <div style={addressStyle}>{}</div>
        </div>
      </div>
          
        
    </div>
  )
}

export default Company;
