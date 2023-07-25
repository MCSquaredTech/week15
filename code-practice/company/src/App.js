import logo from './logo.svg';
import  CompanyContainer  from '../src/Components/CompanyContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='container' > 
          <div className='row'>
            <div className='sidebar-container'>
              < CompanyContainer companies={[]}/>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
