import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import expensesReducer from '../reducers/expenses';
import FiltersReducer from '../reducers/filters';
import authReducder from '../reducers/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: FiltersReducer,
            auth: authReducder
        }),
        composeEnhancers(applyMiddleware(thunk)),
    );
    return store;
};


