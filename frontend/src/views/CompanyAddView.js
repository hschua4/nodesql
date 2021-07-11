import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { addCompany } from '../actions/companyActions';
import { COMPANY_ADD_RESET } from '../constants/constants';

const CompanyAddView = ({ match, history }) => {
	const companyId = match.params.id;

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [logo, setLogo] = useState('');
	const [websiteURL, setWebsiteURL] = useState('');

	const dispatch = useDispatch();

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const companyAdd = useSelector((state) => state.companyAdd);
	const {
		loading: loadingAdd,
		error: errorAdd,
		success: successAdd,
	} = companyAdd;

	useEffect(() => {
		if (!userInfo) {
			history.push('/');
		}

		if (successAdd) {
			dispatch({ type: COMPANY_ADD_RESET });
			history.push('/company/pages/1');
		}
		// else {
		// 	if (!company || company.id !== Number(companyId)) {
		// 		dispatch(getCompanyDetails(companyId));
		// 	} else {
		// 		setName(company.Name);
		// 		setEmail(company.Email);
		// 		setLogo(company.Logo);
		// 		setWebsiteURL(company.WebsiteURL);
		// 	}
		// }
	}, [dispatch, history, successAdd, userInfo]);

	// const uploadFileHandler = async (e) => {
	// 	const file = e.target.files[0];
	// 	const formData = new FormData();
	// 	formData.append('image', file);
	// 	// setUploading(true);

	// 	try {
	// 		const config = {
	// 			headers: {
	// 				'Content-Type': 'multipart/form-data',
	// 			},
	// 		};

	// 		const { data } = await axios.post('/api/upload', formData, config);

	// 		setImage(data);
	// 		setUploading(false);
	// 	} catch (error) {
	// 		console.error(error);
	// 		setUploading(false);
	// 	}
	// };

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(
			addCompany({
				id: companyId,
				name,
				email,
				logo,
				websiteURL,
			})
		);
	};

	return (
		<>
			<Link to='/company/pages/1' className='btn btn-light my-3'>
				Go Back
			</Link>

			<Container>
				<Row className='justify-content-md-center'>
					<Col xs={12} md={6}>
						<h1>Add Company</h1>

						{loadingAdd && <Loader />}
						{errorAdd && <Message variant='danger'>{errorAdd}</Message>}

						<Form onSubmit={submitHandler}>
							<Form.Group controlId='name'>
								<Form.Label>Name</Form.Label>
								<Form.Control
									type='name'
									placeholder='Enter name'
									value={name}
									onChange={(e) => setName(e.target.value)}
								></Form.Control>
							</Form.Group>

							<Form.Group controlId='email'>
								<Form.Label>Email</Form.Label>
								<Form.Control
									type='email'
									placeholder='Enter email'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								></Form.Control>
							</Form.Group>

							<Form.Group controlId='logo'>
								<Form.Label>Logo</Form.Label>
								<Form.Control
									type='text'
									placeholder='Enter logo url'
									value={logo}
									onChange={(e) => setLogo(e.target.value)}
								></Form.Control>
							</Form.Group>

							<Form.Group controlId='websiteURL'>
								<Form.Label>Website URL</Form.Label>
								<Form.Control
									type='text'
									placeholder='Enter Website URL'
									value={websiteURL}
									onChange={(e) => setWebsiteURL(e.target.value)}
								></Form.Control>
							</Form.Group>

							<Button type='submit' variant='primary'>
								Add
							</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default CompanyAddView;
