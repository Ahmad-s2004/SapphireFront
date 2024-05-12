import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { addToCart } from '../../redux/reduxSlice';
import { useDispatch } from 'react-redux';
import Loading from '../../components/Loading';



const NewInProduct = () => {

    const {_id} = useParams();

    const [amount, setAmount] = useState(0)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const dispatch = useDispatch()



  const userData = async () => {
    let res = await fetch(`https://sapphire-back-main.vercel.app/api/v2/auth/newin/${_id}`)
    res = await res.json()
    setData(res)
    
    userData()
    setLoading(false)
  }

  useEffect(() => {
    userData()
  }, [])

  const formatePrice = (price) =>{
    return `${price.toLocaleString()}`;
  }

  const ShowProduct = () =>{
    return(
      <div className='lightgrey-color padding-top-bottom'>
      <div className="container">
          <div className="row ">
              <div className="col-lg-6 text-center">
                  <img src={`https://sapphire-back-main.vercel.app/api/v3/auth/${data.img}`} alt="" />
              </div>
              <div className="col-lg-6">
                  <div className="fnt-mont h5 fw-bold">{data.title}</div>
                  <div className="fnt-mont h6">Rs.{formatePrice(data.price*1)}</div>
                  <div className="fnt-mont fw-bold">Size: {data.size}</div>
                  <div className="fnt-mont mt-2">{data.description}</div>
                  <div className="fnt-mont fw-1 fnt-color">Details:</div>
                  <span className="fnt-mont fnt-color fw-2 ">{data.detail}</span>
                  <div className="fnt-mont fw-1 fnt-color">Color: <span className='fw-2'>{data.color}</span></div>
                  <div className="fnt-mont fw-1 fnt-color">Fabric: <span  className='fw-2'>{data.fabric}</span></div>
                  
                  <a  onClick={() => sendData(data)} className="btn btn-dark cart-btn fnt-mont py-3 px-4"  style={{height:"60px"}}>ADD TO CART</a>
              </div>
          </div>
      </div>
  </div>
    )
  }
  

  const sendData = (ele) =>{
    dispatch(addToCart(ele))
  }
  
   
  return (
    <>{loading?<Loading/> : <ShowProduct/>}</>
  )
}

export default NewInProduct
