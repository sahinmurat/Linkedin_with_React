import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className='app'>
      <Header />
      <div className="app_body" >
      <Sidebar />
      <Feed/>
    </div>
      
   
      {/* widgets */}
    </div>
  );
}

export default App;
