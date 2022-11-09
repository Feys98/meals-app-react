import './App.css';
import Favorites from './components/Favorites';
import Meals from './components/Meals';
import Modal from './components/Modal';
import Search from './components/Search';

function App()
{
  return (
    <div className="HelloWorld">
      <h1>
        {/* <Search/> */}
        {/* <Favorites /> */}
        <Meals/>
        {/* <Modal/> */}
      </h1>
    </div>

  );
}

export default App;
