import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/SearchBar';
import Todo from './Components/Todo';
import { Provider } from 'react-redux';
import { Store } from './redux/Store';

function App() {
  return (
    <div >
      <Provider store={Store}>
      <SearchBar/>
      </Provider>
      
    </div>
  );
}

export default App;
