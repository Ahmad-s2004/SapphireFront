import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FaTrash } from 'react-icons/fa';
import { addToCart, removeSingleItem, removeToCart } from '../../redux/reduxSlice';
import { Link, Outlet } from 'react-router-dom'
import CheckoutPage from './CheckoutPage';

const Cart2 = () => {


    const[totalBill, setTotalBill] = useState()
    const[totalamountse, setTotalamountse] = useState()
  
    const {carts} = useSelector(state=>state.allDetail)
    console.log("cart page _____ ", carts)
    
    const dispatch = useDispatch()
  
  // increasing quantity one by one 
    const incrementHanlder = (ele) =>{
      dispatch(addToCart(ele))
    }
  
    // decreasing quantity one by one 
    const decrease = (ele) =>{
      dispatch(removeSingleItem(ele))
    }
  
  // deleting item from cart 
  const deleteItem = (item) =>{
    dispatch(removeToCart(item))
  }
  
  
    const grandTotal = () =>{
      let total = 0;
      carts.map(ele =>{
        total = ele.price * ele.__v + total; 
      })
      setTotalBill(total)
    }
  
    useEffect(()=>{
      grandTotal()
  },[grandTotal])
  




    return (
        <div>
            {/* HEADING SECTION */}
            <div className="container-fluid">
                <div className="text-center font-mont h5 bg-lightgrey fw-bold my-3 py-3">SHOPPING CART</div>
            </div>
            {/* BUTTON SECTION */}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-0"></div>
                    <div className="col-lg-4 col-md-4 col-sm-0"></div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="container">
                            <div className="row fnt-mont text-center h5 px-4 fw-bold">
                                <div className="col-6">SUBTOTAL:</div>
                                <div className="col-6">RS.{totalBill}</div>
                            </div>
                            <div className="row">
                                <div className="btn btn-dark fnt-mont mx-auto fw-bold w-75 h4" id='CartCheckoutBtn'>CHECKOUT</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* CART ITEMS */}
            <div className="container-fluid px-4">
               {
                carts.map(item=>{
                    return(
                        <div className="row my-2">
                        <div className="col-lg-5">
                            <div className="row" id='CartItems'>
                                <div className="col-3"><img src={`https://sapphire-back.vercel.app/api/v3/auth/${item.img}`} width={85} alt="" /></div>
                                <div className="col-9">
                                    <div className="row pt-3 fw-bold">{item.title}</div>
                                    {/* <div className="row">SIZE</div> */}
                                    <div className="row pt-4"  onClick={()=>deleteItem(item._id)}><i className="fa-sharp fa-solid fa-trash"/></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 text-center">
                            <div className="row pt-4" id='CartItems'>
                            <div className="col-4 fnt-mont">RS.{item.price}</div>
                            <div className="col-4 text-center"><button onClick={()=>incrementHanlder(item)} className='btn btn-dark btn-sm me-2'>+</button>
                                        <input value={item.__v} className='text-center' id='qntyBx' readOnly/>                                         
                                        <button onClick={item.__v>1 ? ()=>decrease(item) : ()=>deleteItem(item._id)} className='btn btn-dark btn-sm ms-2'>-</button></div>
                            <div className="col-4 fnt-mont" style={{fontWeight:"600", color:"#2b2b2b"}}>Rs.{item.price * item.__v}</div>
                        </div>
                        </div>
                    </div>
                    )
                })
               }
            </div>
        </div>
    )
}

export default Cart2
