import './App.css';
import React ,{useState , useEffect} from 'react';
import Home from './component/home';
import Product from './component/product';
import Products from './component/products';
import Footer from './component/footer';
import Cart from './component/cart';
import About from './component/about';
import {Nav, Navbar, Container, Button } from 'react-bootstrap';
import {HashRouter ,Routes ,Route,Link} from 'react-router-dom';
import {  useSelector } from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './component/login';
import Register from './component/register';

 

function App() {

    const [data, setData] = useState([]);
   // const[filter , setFilter]=useState();

    
    const totalQuantity = useSelector(state => state.cart.totalQuantity);

useEffect(() => {

           fetch("https://fakestoreapi.com/products")
           .then((res) => res.json())
           .then((data) => setData(data))

          
  },[]) 
    console.log(data);
    // const updatedlist=data.filter((x)=>x.category===("men's clothing" && "women's clothing"));
    // setFilter(updatedlist);  
    // console.log(filter);
  

  return (
   
    <HashRouter basename='/'>
    <div>
    <>
     <Navbar bg="dark" variant={'dark'}  expand="lg" sticky='top'>
            <Container>
            <Navbar.Brand className="Brand_title" > 
            <img
              alt="logo"
              src="https://is4-ssl.mzstatic.com/image/thumb/Purple123/v4/ae/ee/05/aeee05d8-cded-f513-4b91-f21192440696/source/512x512bb.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top rounded-circle "
            />
            LEE COLLECTION
          </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" >
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/product">Product</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    </Nav>
                    <div className='buttons'>
                        <Button  className='btn' variant="outline-primary">
                         <Link to="/login">  <i className='fa fa-sign-in me-1'>Login</i></Link>
                        </Button>
                        <Button  className='btn ms-2' variant="outline-primary">
                        <Link to="/register"> <i className='fa fa-user-plus me-1'>Register</i></Link>
                        </Button>
                       <Button  className='btn ms-2' variant="outline-primary">
                         <Link to="/cart"> <i className='fa fa-shopping-cart me-1'>Cart({totalQuantity})</i></Link>
                        </Button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        </>

        <div>
          <Routes>
             <Route path="/" element={<Home data={data}/>}></Route>
             <Route path="/home" element={<Home data={data}/>}></Route>
             <Route path="/product" element={<Product data={data}/>}></Route>
             <Route path="/product/:id" element={<Products/>}></Route>
             <Route path="/about" element={<About/>}></Route>
             <Route path="/contact" element={<Footer/>}></Route>
             <Route path="/cart" element={<Cart/>}></Route>
              <Route path="/login" element={<Login/>}></Route>
              <Route path="/register" element={<Register/>}></Route>



          </Routes>
        </div>

     </div>
      
     </HashRouter>
   

  );
}

export default App;
