import { GrAddCircle } from 'react-icons/gr';
import '../App.css';

const CompanyContainer = () => { 


    return (
        <>
            {/* Compnay Name Container */}
            <div className='card'> 
                <div className='card-header companyheader'> 
                    <p>Companies <button className="btn" style={{ position: 'absolute', bottom: '-2px', right: '1px' }}>
                    < GrAddCircle 
                        color="white"
                        size="24px"
                        title="add company" />
                    </button></p>
                </div>
                <div className='card-body companybody'>
                    <div className='companyitems' style={{ position: 'absolute', bottom: '-2px', right: '1px' }}>
                        <p>Brooks Intenet Software</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompanyContainer; 