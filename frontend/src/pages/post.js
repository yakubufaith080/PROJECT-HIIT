import {Container,Form,Button,Card} from 'react-bootstrap';
import {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Post(){
    const navigate = useNavigate();
    const [text,setText] = useState('');
    const [user,setUser] = useState('');

    const handleSubmit = async ()=>{
        try{     
            const {data:response} = await axios.post('http://localhost:7000/create',{post:text,user});
            if(!response){
                alert('something went wrong creating post')
                return;
            }
            alert('post saved!');
            navigate('/')
        }catch(err){
            alert(err.message)
        }
    }
    return(
        <>
            <Container>
                <div className='d-flex justify-content-center align-items-center' style={{height:'100%',width:'100%'}}>
                    <Card className='rounded-0 shadow-lg' style={{minWidth:'50vw'}}>
                        <Card.Body>
                            <h1 className='text-center'>Create a Post</h1>
                            <Form>
                                <Form.Control type='text' placeholder='Enter Post Content' as='textarea' className='mb-3' rows={7} onChange={(e)=>setText(e.target.value)}/>
                                <Form.Control type='text' className='mb-3' onChange={(e)=>setUser(e.target.value)} placeholder='Enter Author Name'/>
                                <div className='text-center'>
                                    <Button onClick={()=>handleSubmit()}>
                                        Post
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </>
    )
}