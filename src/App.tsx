import './style.scss'
import { setupStore } from './store';
import { Provider } from 'react-redux'
import { Main } from './components/Main/Main';



function App() {

  const store = setupStore()

  return (
    // <Provider store={store}>
    // </Provider>
    <Main/>
  );
}

export default App;