import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './utils/store';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
    </Provider>
  )
}

export default App;



