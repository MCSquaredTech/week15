import { useState } from 'react';



const CompanyForm = ({onSave, customer=[]}) => {
    const [ userData, setUserData ] = useState(customer); 

    const { company_name, address1, address2, city, state, zip } = userData
    
    const handleChange = (event) => {         
        const { name, value } = event.target; 
        console.log(name, value);
        setUserData((prevData) => ({...prevData, [name]: value})); 
    }

    const handleSave = () => { 
        onSave(userData);
    }

    return (
        <div> 
            <div>
                <p>Company Name</p>
                <input type="text" name="company_name" value={company_name} onChange={handleChange} />
            </div>
            <div>
                <p>Address 1</p>
                <input type="text" name="address1" value={address1} onChange={handleChange} />
            </div>
            <div>
                <p>Address2</p>
                <input type="text" name="address2" value={address2}  onChange={handleChange} />
            </div>
            <div>
                <p>City</p>
                <input type="text" name="city" value={city} onChange={handleChange} />
            </div>
            <div>
                <p>State</p>
                <input type="text" name="state" value={state} onChange={handleChange} />
            </div>
            <div>
                <p>Zip Code</p>
                <input type="text" name="zip" value={zip} onChange={handleChange} />
            </div>
            <div style={{ marginTop: '12px' }}>
                <button className='btn btn-primary' onClick={handleSave}>Save</button>
            </div>
        </div>
    )
}

export default CompanyForm;