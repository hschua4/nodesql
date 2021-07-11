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

import {
	employeeListReducer,
	employeeDeleteReducer,
	employeeDetailsReducer,
	employeeUpdateReducer,
	employeeAddReducer,
} from './reducers/employeeReducers';

const reducer = combineReducers({
	userLogin: loginReducer,
	companyList: companyListReducer,
	companyDelete: companyDeleteReducer,
	companyDetails: companyDetailsReducer,
	companyUpdate: companyUpdateReducer,
	companyAdd: companyAddReducer,
	employeeList: employeeListReducer,
	employeeDelete: employeeDeleteReducer,
	employeeDetails: employeeDetailsReducer,
	employeeUpdate: employeeUpdateReducer,
	employeeAdd: employeeAddReducer,
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
