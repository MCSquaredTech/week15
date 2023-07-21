import React from 'react'

const Company = (props) => {
   const {company_name } = props.company;
  return (
    <div>
      <ul>
        <li>{company_name}</li>
      </ul>
    </div>
  )
}

export default Company;
