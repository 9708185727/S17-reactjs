

import {store,persistor} from './redux/store'
import Routes from './Routes'
import { ToastContainer } from 'react-toastify';

import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
const App = () => {

  return (
    <div>
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
  <Routes/>
  <ToastContainer />
      </PersistGate>
 
  </Provider>
    </div>
  )
}

export default App




