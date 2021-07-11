import React from 'react';
import { Route } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { logout } from '../actions/userActions';

const Header = () => {
	const dispatch = useDispatch();

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const logoutHandler = () => {
		dispatch(logout());
	};

	return (
		<header>
			<Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
				<Container>
					<LinkContainer to='/'>
						<Navbar.Brand>NodeSQL</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						{/* <Route render={({ history }) => <SearchBox history={history} />} /> */}
						<Nav className='ms-auto'>
							{userInfo ? (
								<>
									<LinkContainer to='/company/pages/1'>
										<Nav.Link>Company</Nav.Link>
									</LinkContainer>
									<LinkContainer to='/company'>
										<Nav.Link>Employee</Nav.Link>
									</LinkContainer>
									<NavDropdown title={userInfo.email} id='username'>
										<NavDropdown.Item onClick={logoutHandler}>
											Logout
										</NavDropdown.Item>
									</NavDropdown>
								</>
							) : (
								<LinkContainer to='/'>
									<Nav.Link>Sign In</Nav.Link>
								</LinkContainer>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
