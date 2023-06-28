
import { Outlet } from 'react-router-dom';
import './App.css';
import ProductListing from './components/ProductListing';

function App() {
  return (
    <div className="App">
<Outlet/>
 </div>
  );
}

export default App;
