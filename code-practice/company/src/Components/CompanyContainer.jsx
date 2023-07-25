import '../App.css';

const CompanyContainer = ({companies=[]}) => { 


    return (
        
        <>
            {/* Compnay Sidebar Container */}
            <div className="sidebar">
                <h1>React Company List</h1>
                <div>
                    <form role="search" className="search-form">
                        <input  
                            id="q"
                            aria-label="Search Companies"
                            placeholder="Search" 
                            name="q" 
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
                        <li>
                        <a href={`/contacts/1`}>Brooks Internet Software</a>
                        </li>
                        <li>
                        <a href={`/contacts/2`}>MC Squared Technologies</a>
                        </li>
                    </ul>
                    </nav>
            </div>
            <div className="detail"></div> 
        </>
        
    )
}

export default CompanyContainer; 