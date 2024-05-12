import React, { useEffect, useState } from 'react'
import ShowCards from '../../components/Details/ShowCards.js' 
import Loading from '../../components/Loading.js'

const Kids = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  try {
  
    var userData = async () => {
      let res = await fetch("https://sapphire-back-main.vercel.app/api/v3/auth/data/kids")
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
    let result = await fetch(`https://sapphire-back-main.vercel.app/api/v2/auth/kids/${id}`,{
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

export default Kids
