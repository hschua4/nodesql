import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { addEmployee } from '../actions/employeeActions';
import { EMPLOYEE_ADD_RESET } from '../constants/constants';

const EmployeeAddView = ({ match, history }) => {
	const employeeId = match.params.id;

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [company, setCompany] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');

	const dispatch = useDispatch();

	const employeeAdd = useSelector((state) => state.employeeAdd);
	const {
		loading: loadingAdd,
		error: errorAdd,
		success: successAdd,
	} = employeeAdd;

	useEffect(() => {
		if (successAdd) {
			dispatch({ type: EMPLOYEE_ADD_RESET });
			history.push('/employee/pages/1');
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
	}, [dispatch, history, successAdd]);

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
			addEmployee({
				firstName,
				lastName,
				company,
				email,
				phone,
			})
		);
	};

	return (
		<>
			<Link to='/employee/pages/1' className='btn btn-light my-3'>
				Go Back
			</Link>

			<Container>
				<Row className='justify-content-md-center'>
					<Col xs={12} md={6}>
						<h1>Add Employee</h1>

						{loadingAdd && <Loader />}
						{errorAdd && <Message variant='danger'>{errorAdd}</Message>}

						<Form onSubmit={submitHandler}>
							<Form.Group controlId='firstName'>
								<Form.Label>First Name</Form.Label>
								<Form.Control
									type='text'
									placeholder='Enter first name'
									value={firstName}
									onChange={(e) => setFirstName(e.target.value)}
								></Form.Control>
							</Form.Group>

							<Form.Group controlId='lastName'>
								<Form.Label>Last Name</Form.Label>
								<Form.Control
									type='text'
									placeholder='Enter last name'
									value={lastName}
									onChange={(e) => setLastName(e.target.value)}
								></Form.Control>
							</Form.Group>

							<Form.Group controlId='company'>
								<Form.Label>Company</Form.Label>
								<Form.Control
									type='text'
									placeholder='Enter company'
									value={company}
									onChange={(e) => setCompany(e.target.value)}
								></Form.Control>
							</Form.Group>

							<Form.Group controlId='email'>
								<Form.Label>Email</Form.Label>
								<Form.Control
									type='text'
									placeholder='Enter email'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								></Form.Control>
							</Form.Group>

							<Form.Group controlId='phone'>
								<Form.Label>Phone</Form.Label>
								<Form.Control
									type='text'
									placeholder='Enter phone'
									value={phone}
									onChange={(e) => setPhone(e.target.value)}
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

export default EmployeeAddView;
