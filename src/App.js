import Header from './components/Header'
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Checkout from './Pages/Checkout';
import Photos from './Pages/Photos';
import {ContextProvider} from './myContext'

/* 
New URL for icons
https://cdn.jsdelivr.net/npm/remixicon@2.3.0/fonts/remixicon.css
*/

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Header />

        <Routes>
          <Route path='/' element={<Photos />}/>
          <Route path='/checkout' element={<Checkout />}/>
        </Routes>
      </ContextProvider>
    </div>
  );
}

export default App;
