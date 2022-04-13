import logo from './logo.svg';
import './App.css';
import Parent from './components/Parent';
import Products from './components/products';

function App() {
  return (
    <div className="App">
     <h2>Component Communication</h2>
     {/* <Parent></Parent> */}
     <Products></Products>
    </div>
  );
}

export default App;
