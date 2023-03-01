import Data from './components/Data.jsx'
import Product from './components/Product.jsx'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Data />} />
        <Route path="/:id" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
