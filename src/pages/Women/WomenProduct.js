import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/reduxSlice';
import Loading from '../../components/Loading';

const WomenProduct = () => {

  const { _id } = useParams();

  const [amount, setAmount] = useState(0)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch()


  const userData = async () => {
    let res = await fetch(`https://sapphire-back-main.vercel.app/api/v2/auth/women/${_id}`)
    res = await res.json()
    setData(res)

    userData()
    setLoading(false)
  }

  useEffect(() => {
    userData()
  }, [])

  const sendData = (ele) => {
    dispatch(addToCart(ele))
  }

  const formatePrice = (price) => {
    return `${price.toLocaleString()}`;
  }

  const ShowProduct = () => {
    return (
      <div className='lightgrey-color padding-top-bottom'>
        <div className="container">
          <div className="row ">
            <div className="col-lg-6 text-center">
              <img src={`https://sapphire-back-main.vercel.app/api/v3/auth/${data.img}`} alt="" />
            </div>
            <div className="col-lg-6 mt-5 ps-3">
              <div className="fnt-mont h5 fw-bold">{data.title}</div>
              <div className="fnt-mont h6">Rs.{formatePrice(data.price * 1)}</div>
              <div className="fnt-mont fw-bold">Size: {data.size}</div>
              <div className="fnt-mont mt-2">{data.description}</div>
              <div className="fnt-mont fw-1 fnt-color">Details:
              <span className="fnt-mont fnt-color fw-2 ">{data.detail}</span></div>
              <div className="fnt-mont fw-1 fnt-color">Color: <span className='fw-2'>{data.color}</span></div>
              <div className="fnt-mont fw-1 fnt-color">Fabric: <span className='fw-2'>{data.fabric}</span></div>
              <button onClick={() => sendData(data)} className="btn btn-dark fnt-mont fw-1 mt-4 px-3 py-2">ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>
    )
  }


  return (
    <>{loading ? <Loading /> : <ShowProduct />}</>
  )
}

export default WomenProduct
