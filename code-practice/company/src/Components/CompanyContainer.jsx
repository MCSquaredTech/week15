import { useState } from 'react'; 
import '../App.css';

const CompanyContainer = ({companies=[]}) => { 
    const [ search, setSearch ] = useState('')

    const handleEvent = (event) => { 
        const { name, value } = event.target; 

        setSearch((prevData) => ({...prevData, [name]: value}))
        companies.filter(company => company.company_name === search)
    } 

    return (
        
        <>
            {/* Compnay Sidebar Container */}
            <div className="sidebar">
                <h1>React Company List</h1>
                <div>
                    <form role="search" className="search-form">
                        <input  
                            id="search"
                            aria-label="Search Companies"
                            placeholder="Search" 
                            name="search" 
                            onChange={handleEvent}
                        />
                        <div 
                            className="sr-only"
                            aria-live="polite"
                        ></div> 
                    </form>
                    <form method="post">
                        <button type="submit">New</button>
                    </form>
                </div>
                <nav>
                    <ul>
                        {}
                        <li>
                            <a href={company.id}>company.company_name</a>
                        </li>
                    </ul>
                    </nav>
            </div>
            <div className="detail"></div> 
        </>
        
    )
}

export default CompanyContainer; 