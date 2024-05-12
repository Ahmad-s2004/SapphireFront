import React, { useEffect, useState } from 'react'
import ShowCards from '../../components/Details/ShowCards'
import Loading from '../../components/Loading'



const Accessories = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  
try {
  var userData = async () => {
    let res = await fetch("https://sapphire-back-main.vercel.app/api/v3/auth/data/accessories")
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

  

  return (
    <div>
    {loading? <Loading/>:<ShowCards data={data}/>}
  </div>
  )
}

export default Accessories
