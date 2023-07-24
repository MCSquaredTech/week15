import React from 'react'

const addressStyle = { 
  display: 'flex',
  flexDirection: 'column',
  float: 'left',
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  fontWeight: "400", 
  textAlign: "start"
}

const addressStyleBold = { 
  display: 'flex',
  flexDirection: 'column',
  float: 'left', 
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  fontWeight: "600", 
  textAlign: "start",
  cursor: 'pointer'
}

const Company = ({props, selectCompany }) => {
  const {company_name, address1, address2, city, state, zip } = props.company;

  let selectCompany = () => { 
    
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm-5'>
          <div style={addressStyleBold}>{company_name}</div>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-5'> 
        <div style={addressStyle}>{}</div>
        </div>
      </div>
          
        
    </div>
  )
}

export default Company;
