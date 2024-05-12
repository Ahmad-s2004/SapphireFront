import React from 'react'
import { Link } from 'react-router-dom'

const ShowCards = ({data}) => {
  
  const formatePrice = (price) =>{
    return `${price.toLocaleString()}`;
  }




  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          {
            data.map((x, ind) => {
              return (
                <div className="col-lg-3 col-md-4 col-sm-6 my-2" key={ind}>
                  <div className="card">
                    <img src={`https://sapphire-back-main.vercel.app/api/v3/auth/${x.img}`} className="card-img-top" alt="sas" />
                    <div className="card-body">
                    <h5 className="card-title fnt-mont fnt-title">{x.title}</h5>
                      <div className="d-flex">
                      <p className="card-text h6 col-6">Rs.{formatePrice(x.price*1)}</p>
                      <Link to={`/${x.category}/${x._id}`} className="btn btn-dark btn-margin col-6">View Item</Link>
                      </div>
                    </div>
                  </div>

                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default ShowCards


