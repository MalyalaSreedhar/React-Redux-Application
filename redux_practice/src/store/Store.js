import {createStore} from 'redux';
import rootReducer from '../reducers/RootReducer';

const ConfigureStore = ()=>{
  return createStore(rootReducer);
}


export default ConfigureStore;
