import {Container,Card,Form, Button} from 'react-bootstrap';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
import {useState} from 'react';


export default function Login(){
    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleLogin = async (e)=>{
        e.preventDefault()
        // const formData = new FormData(e.target)
        try{
            const {data:response} = await axios.post('http://localhost:7000/login',{email,password});
            if(!response){
                alert('cannot login')
                return;
            }
            if(!response.success){
                alert();
                return;
            }

            alert('login successful');
            navigate('/')
        }catch(err){
            console.log(err.message)
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
                                <h2 className='text-center'>LOGIN</h2>
                                <Form onSubmit={handleLogin}>
                                    <Form.Control type='text' name='email' placeholder='Enter your email address' onChange={(e)=>setEmail(e.target.value)} className='mb-3'/>
                                    <Form.Control type='password' name='password' placeholder='Enter your password' onChange={(e)=>setPassword(e.target.value)} className='mb-3'/>
                                    <div className='text-center vw-50'>
                                    <Button type='submit'>
                                        LOGIN
                                    </Button>
                                    </div>
                                    <Link to='/signup'>Go to Signup?</Link>
                                </Form>
                            </Card.Body>
                        </Card>
                    </div>
                </Container>
            </div>
        </>
    )
}