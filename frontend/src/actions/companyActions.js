import axios from 'axios';
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
	COMPANY_ADD_REQUEST,
	COMPANY_ADD_SUCCESS,
	COMPANY_ADD_FAIL,
} from '../constants/constants';

export const getCompanyList =
	(pageNumber = '') =>
	async (dispatch, getState) => {
		try {
			dispatch({
				type: COMPANY_LIST_REQUEST,
			});

			const {
				userLogin: { userInfo },
			} = getState();

			const config = {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${userInfo.token}`,
				},
			};

			const { data } = await axios.get(
				`/api/company?pageNumber=${pageNumber}`,
				config
			);

			dispatch({
				type: COMPANY_LIST_SUCCESS,
				payload: data,
			});
		} catch (error) {
			dispatch({
				type: COMPANY_LIST_FAIL,
				payload:
					error.response && error.response.data.message
						? error.response.data.message
						: error.message,
			});
		}
	};

export const deleteCompany = (id) => async (dispatch, getState) => {
	try {
		dispatch({
			type: COMPANY_DELETE_REQUEST,
		});

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const { data } = await axios.delete(`/api/company/${id}`, config);

		dispatch({
			type: COMPANY_DELETE_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: COMPANY_DELETE_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const getCompanyDetails = (id) => async (dispatch, getState) => {
	try {
		dispatch({ type: COMPANY_DETAILS_REQUEST });

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const { data } = await axios.get(`/api/company/${id}`, config);

		dispatch({
			type: COMPANY_DETAILS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: COMPANY_DETAILS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const updateCompany = (company) => async (dispatch, getState) => {
	try {
		dispatch({
			type: COMPANY_UPDATE_REQUEST,
		});

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const { data } = await axios.put(
			`/api/company/${company.id}`,
			company,
			config
		);

		dispatch({
			type: COMPANY_UPDATE_SUCCESS,
			payload: data,
		});

		// dispatch({
		// 	type: PRODUCT_DETAILS_SUCCESS,
		// 	payload: data,
		// });
	} catch (error) {
		dispatch({
			type: COMPANY_UPDATE_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const addCompany = (company) => async (dispatch, getState) => {
	try {
		dispatch({
			type: COMPANY_ADD_REQUEST,
		});

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const { data } = await axios.post(`/api/company/`, company, config);

		dispatch({
			type: COMPANY_ADD_SUCCESS,
			payload: data,
		});

		// dispatch({
		// 	type: PRODUCT_DETAILS_SUCCESS,
		// 	payload: data,
		// });
	} catch (error) {
		dispatch({
			type: COMPANY_ADD_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
