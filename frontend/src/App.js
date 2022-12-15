import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from "./pages/login";
import Signup from "./pages/signup";
import Home from './pages/home';
import Posts from "./pages/posts";
import Post from "./pages/post";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/' element={<Home/>}>
          <Route path='' index element={<Posts/>}/>
          <Route path='/new' element={<Post/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
