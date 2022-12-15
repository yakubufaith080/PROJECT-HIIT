import {Nav,Navbar,Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavBar(){
    return(
        <>
            <Navbar bg='primary' expand='lg' variant='dark' className='mb-5'>
                <Container>
                    <Navbar.Brand className='ms-3'>
                        <h1>MY BLOG</h1>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='toggle-nav'/>
                    <Navbar.Collapse id='toggle-nav'>
                        <Nav className='ms-auto'>
                            <Nav.Link className='me-2'>
                                <Link className='text-light' to='/' style={{textDecoration:'none'}}> 
                                Home
                                </Link>
                            </Nav.Link>
                            <Nav.Link className='me-2'>
                            <Link className='text-light' to='/new' style={{textDecoration:'none'}}> 
                                Add Post
                                </Link>
                            </Nav.Link>
                            <Nav.Link className='me-2'>
                            <Link className='text-light' to='/login' style={{textDecoration:'none'}}> 
                                Log out
                                </Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}