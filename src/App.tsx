import './style.scss'
import { setupStore } from './redux/store';
import { Provider } from 'react-redux'
import { Main } from './components/Main/Main';



function App() {

  const store = setupStore()

  return (
    <Provider store={store}>
      <Main />
    </Provider>

  );
}

export default App;