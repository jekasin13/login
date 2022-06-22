import { BrowserRouter} from 'react-router-dom';
import './App.css'
import Navbar from './components/UI/Navbar/Navbar'
import Router from './components/Router';



function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Router/>
    </BrowserRouter>
  );
}

export default App;
