import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loading from '../../components/Loading'
import ShowCards from '../../components/Details/ShowCards'

const Men = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
try {
  
  var userData = async () => {
    let res = await fetch("https://sapphire-back-main.vercel.app/api/v3/auth/data/men")
    res = await res.json()
    setData(res)
    userData()
    setLoading(false)
  }

  useEffect(() => {
    userData()
  }, [])
} catch (error) {
  console.log(error)
}


  const deleteone = async(id) =>{
    let result = await fetch(`https://sapphire-back-main.vercel.app/api/v2/auth/user/${id}`,{
      method: "delete"
    })
    result = await result.json()
    if(result){
      // alert("record deleted successfully")
      userData()
    }
  }


  return (
    <div>
      {loading ? <Loading/> : <ShowCards data={data}/>}
    </div>
  )
}

export default Men
