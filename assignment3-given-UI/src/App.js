import './App.css';
import Box from './components/Box';
import Heading from './components/Heading';

function App() {
  return (
    <div className='container'>
      <div>
        <Heading/>
      </div>
      <div>
        <Box/>
        <Box/>
        <Box/>
      </div>
    </div>
  );
}

export default App;
