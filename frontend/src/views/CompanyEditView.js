import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { getCompanyDetails, updateCompany } from '../actions/companyActions';
import { COMPANY_UPDATE_RESET } from '../constants/constants';

const CompanyEditScreen = ({ match, history }) => {
	const companyId = match.params.id;

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [logo, setLogo] = useState('');
	const [websiteURL, setWebsiteURL] = useState('');

	const dispatch = useDispatch();

	const companyDetails = useSelector((state) => state.companyDetails);
	const { loading, error, company } = companyDetails;

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const companyUpdate = useSelector((state) => state.companyUpdate);
	const {
		loading: loadingUpdate,
		error: errorUpdate,
		success: successUpdate,
	} = companyUpdate;

	useEffect(() => {
		if (!userInfo) {
			history.push('/');
		}

		if (successUpdate) {
			dispatch({ type: COMPANY_UPDATE_RESET });
			history.push('/company/pages/1');
		} else {
			if (!company || company.id !== Number(companyId)) {
				dispatch(getCompanyDetails(companyId));
			} else {
				setName(company.Name);
				setEmail(company.Email);
				setLogo(company.Logo);
				setWebsiteURL(company.WebsiteURL);
			}
		}
	}, [dispatch, history, companyId, company, successUpdate, userInfo]);

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(
			updateCompany({
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
						<h1>Edit Company</h1>

						{loadingUpdate && <Loader />}
						{errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}

						{loading ? (
							<Loader />
						) : error ? (
							<Message variant='danger'>{error}</Message>
						) : (
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
									Update
								</Button>
							</Form>
						)}
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default CompanyEditScreen;
