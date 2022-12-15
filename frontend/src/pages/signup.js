import {Container,Card,Form, Button} from 'react-bootstrap';
import axios from 'axios';
import {useState} from 'react';
import { Link,useNavigate } from 'react-router-dom';


export default function Signup(){
    const navigate = useNavigate();
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const hanldeSignup = async (e)=>{
        e.preventDefault();
        // const formData = new FormData(e.target)
        try{
            const {data:response} = await axios.post('http://localhost:7000/signup',{username,password,email});
            if(!response){
                alert('cannot signup')
                return;
            }
            if(!response.success){
                alert(response.message);
                return;
            }

            alert('signup successful');
            navigate('/')
        }catch(err){
            alert(err.message);
        }
    }
    return(
        <>
            <div className='vh-100 vw-100'>
                <Container style={{height:'100%'}}>
                    <div className='d-flex justify-content-center align-items-center' style={{width:'100%',height:'100%'}}>
                        <Card className='shadow-lg rounded-0' style={{minWidth:'40vw'}}>
                            <Card.Body>
                                <h2 className='text-center'>SIGNUP</h2>
                                <Form onSubmit={hanldeSignup}>
                                    <Form.Control type='text' onChange={(e)=>setUsername(e.target.value)} placeholder='Enter your username' className='mb-3'/>
                                    <Form.Control type='text' name='email' onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your email address' className='mb-3'/>
                                    <Form.Control type='password' name='password' onChange={(e)=>setPassword(e.target.value)} placeholder='Enter your password' className='mb-3'/>
                                    <div className='text-center vw-50'>
                                    <Button type='submit'>
                                        LOGIN
                                    </Button>
                                    </div>
                                    <Link to='/login'>Login?</Link>
                                </Form>
                            </Card.Body>
                        </Card>
                    </div>
                </Container>
            </div>
        </>
    )
}