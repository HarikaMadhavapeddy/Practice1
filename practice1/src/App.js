import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/SearchBar';
import Todo from './Components/Todo';
import { Provider } from 'react-redux';
import { Store } from './redux/Store';
import Quiz from './Components/Quiz';

function App() {
  return (
    <div >
      <Quiz/>
      
    </div>
  );
}

export default App;
