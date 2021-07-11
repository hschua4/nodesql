import {
	COMPANY_LIST_REQUEST,
	COMPANY_LIST_SUCCESS,
	COMPANY_LIST_FAIL,
	COMPANY_DELETE_REQUEST,
	COMPANY_DELETE_SUCCESS,
	COMPANY_DELETE_FAIL,
	COMPANY_DETAILS_REQUEST,
	COMPANY_DETAILS_SUCCESS,
	COMPANY_DETAILS_FAIL,
	COMPANY_UPDATE_REQUEST,
	COMPANY_UPDATE_SUCCESS,
	COMPANY_UPDATE_FAIL,
	COMPANY_UPDATE_RESET,
	COMPANY_ADD_REQUEST,
	COMPANY_ADD_SUCCESS,
	COMPANY_ADD_FAIL,
	COMPANY_ADD_RESET,
} from '../constants/constants';

export const companyListReducer = (state = { companies: [] }, action) => {
	switch (action.type) {
		case COMPANY_LIST_REQUEST:
			return { loading: true };
		case COMPANY_LIST_SUCCESS:
			return {
				loading: false,
				companies: action.payload.companies,
				pages: action.payload.pages,
				page: action.payload.page,
			};
		case COMPANY_LIST_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};

export const companyDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case COMPANY_DELETE_REQUEST:
			return { loading: true };
		case COMPANY_DELETE_SUCCESS:
			return { loading: false, success: true };
		case COMPANY_DELETE_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const companyDetailsReducer = (state = { company: {} }, action) => {
	switch (action.type) {
		case COMPANY_DETAILS_REQUEST:
			return { ...state, loading: true };
		case COMPANY_DETAILS_SUCCESS:
			return { loading: false, company: action.payload };
		case COMPANY_DETAILS_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const companyUpdateReducer = (state = { company: {} }, action) => {
	switch (action.type) {
		case COMPANY_UPDATE_REQUEST:
			return { loading: true };
		case COMPANY_UPDATE_SUCCESS:
			return { loading: false, success: true, company: action.payload };
		case COMPANY_UPDATE_FAIL:
			return { loading: false, error: action.payload };
		case COMPANY_UPDATE_RESET:
			return { company: {} };
		default:
			return state;
	}
};

export const companyAddReducer = (state = { company: {} }, action) => {
	switch (action.type) {
		case COMPANY_ADD_REQUEST:
			return { loading: true };
		case COMPANY_ADD_SUCCESS:
			return { loading: false, success: true, company: action.payload };
		case COMPANY_ADD_FAIL:
			return { loading: false, error: action.payload };
		case COMPANY_ADD_RESET:
			return { company: {} };
		default:
			return state;
	}
};
