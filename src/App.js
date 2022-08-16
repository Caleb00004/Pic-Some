import Header from './components/Header'
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Checkout from './Pages/Checkout';
import Image from './Pages/Image';

/* 
New URL for icons
https://cdn.jsdelivr.net/npm/remixicon@2.3.0/fonts/remixicon.css
*/

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Home page</h1>

      <Routes>
        <Route path='/' element={<Image />}/>
        <Route path='/checkout' element={<Checkout />}/>
      </Routes>
    </div>
  );
}

export default App;
