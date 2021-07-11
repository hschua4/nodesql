import React, { useState, useEffect } from 'react';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/userActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const LoginView = ({ history }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();

	const userLogin = useSelector((state) => state.userLogin);
	const { loading, error, userInfo } = userLogin;

	useEffect(() => {
		if (userInfo) {
			history.push('/company/pages/1');
		}
	}, [userInfo, history]);

	const submitHandler = async (e) => {
		e.preventDefault();

		dispatch(login(email, password));
	};

	return (
		<Container className='p-5'>
			<Row className='justify-content-md-center mt-5'>
				<Col xs={12} md={6}>
					<h1>Log In</h1>

					{error && <Message variant='danger'>{error}</Message>}
					{loading && <Loader />}

					<Form onSubmit={(e) => submitHandler(e)}>
						<Form.Group controlId='email' className='mt-5'>
							<Form.Label className=''>Email Address</Form.Label>
							<Form.Control
								type='text'
								placeholder='Enter Email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							></Form.Control>
						</Form.Group>

						<Form.Group controlId='password' className='mt-2'>
							<Form.Label className=''>Password</Form.Label>
							<Form.Control
								type='password'
								placeholder='Enter Password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							></Form.Control>
						</Form.Group>

						<Button type='submit' variant='primary' className='mt-4'>
							Log In
						</Button>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};

export default LoginView;
