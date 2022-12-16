import { useNavigate} from 'react-router-dom';
import axios from 'axios';
import { useState,useEffect } from 'react';
import { Container,Card } from 'react-bootstrap';

export default function Posts(){
    const [posts,setPosts] = useState([]);
    const navigate = useNavigate()

    const fetchPosts = async ()=>{
        try {
            const {data:response} = await axios.get('http://localhost:7000/posts');
            if(!response){
                alert('cannot get posts')
            }
            if(!response.success){
                alert(response.message)
            }
            setPosts(response.data);
        } catch (error) {
            console.log(error.message)
        }
    }
const deletePost = async(id) =>{
    console.log(id)
    try{
        const {data:response} = await axios.post(`http://localhost:7000/delete/${id}`,{})     
        
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

    useEffect(()=>{
        fetchPosts();
    },[])
    return(
        <>
        {
            posts.length < 1 ? <div className='d-flex justify-content-center align-items-center' style={{height:'100%'}}>
                Loading...
            </div>:
            <Container>
                <div className='row g-3'>
            {
                posts.map((post,index)=>{
                    return(
                        <Card style={{minHeight:'30vh'}} key={index} className='shadow-lg col col-12 col-md-4'>
                            <Card.Body className='d-flex flex-column gap-3'>
                                <p className='mb-3 px-2'>{post.text}</p>
                                <span className='ms-auto'>By : {post.author}</span>

                                <div className='mt-4 text-right'><button className='btn btn-danger' onClick={()=>deletePost(post.id)}>DELETE</button>
                                
                                </div>
                            </Card.Body>
                        </Card>
                        )
                    })
                }
                </div>
            </Container>
        }

        </>
    )
}