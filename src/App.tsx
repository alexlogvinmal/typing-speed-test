import './style.scss'
import { setupStore } from './redux/store';
import { Provider } from 'react-redux'
import { Main } from './components/Main/Main';
import { Header } from './components/Header/Header';



function App() {

  const store = setupStore()

  return (
    <Provider store={store}>
      <Header/>
      <Main />
    </Provider>

  );
}

export default App;