import { createStore } from 'redux';
import indexReducer from '../reducers/indexReducer';

const configureStore = (railsProps) => createStore(indexReducer, railsProps);

export default configureStore;
