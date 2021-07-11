import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loginReducer } from './reducers/userReducers';
import {
	companyListReducer,
	companyDeleteReducer,
	companyDetailsReducer,
	companyUpdateReducer,
	companyAddReducer,
} from './reducers/companyReducers';

const reducer = combineReducers({
	userLogin: loginReducer,
	companyList: companyListReducer,
	companyDelete: companyDeleteReducer,
	companyDetails: companyDetailsReducer,
	companyUpdate: companyUpdateReducer,
	companyAdd: companyAddReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo')
	? JSON.parse(localStorage.getItem('userInfo'))
	: {};

const initialState = {
	userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
