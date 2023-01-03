
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { cartActions } from '../component/redux/slices/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { AiFillDelete } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import Footer from './footer';
import '../cart.css';

const Cart = () => {

  const cartItems = useSelector(state => state.cart.cartItems);
  console.log(cartItems);
  const SubTotal = useSelector(state => state.cart.totalAmount);

  return (
    <>

      <section className="mt-2">
        <Container>
          <Row className='d-flex flex-row justify-content-center align-item-center'>
            <Col lg='9' md='9'>
              {cartItems.length === 0 ?
                (<div className='d-flex flex-column justify-content-center'> 
                       
                  <h2 className='fs-4 text-center'>No items added in cart</h2>
                  <div className='text-center'>
                  <img src="https://www.maafashion.co.in/Skins/site-default/img/empty-cart.gif" height="200"  width="200" alt="cart"/>
                  </div>
                  <div className='text-center'>
                  <button className='btn btn-primary btn-sm text-center'><Link style={{ textDecoration: 'none' , color:'#ffffff'}} to="/product">Continue Shopping</Link></button>
                  </div>
                
                 
                </div>
                ) :
                (<Table responsive bordered>
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>ProductName</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Delete</th>

                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <Remove item={item} key={index} />
                    ))}
                  </tbody>
                </Table>
                )}


            </Col>
            <Col lg="3" md="3">

              <div className="Checkout">
                <h6>Total Qty:<span>{cartItems.length}</span></h6>
                <h6>SubTotal:<span>${SubTotal}</span></h6>
                <h6>Free Shipping <span>$0</span></h6>
                <h4>Total<span>${SubTotal}</span></h4>
                <button className='btn btn-primary btn-sm w-100 mt-2'>Checkout</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='mt-2'>
        <Footer className="mt"></Footer>

      </section>

    </>
  )
}
const Remove = ({ item }) => {

  const dispatch = useDispatch();
  const Delete = () => {
    dispatch(cartActions.deleteItem(item.id))
  }
  return (<tr>
    <td><img src={item.imageUrl} alt="pic" className="w-25 h-25" /></td>
    <td>{item.productName}</td>
    <td>{(item.price)}</td>
    <td>{item.quantity}Nos</td>
    <td><AiFillDelete className="delete" onClick={Delete} /></td>
  </tr>)


}





export default Cart