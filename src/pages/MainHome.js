import React, { useState } from 'react'
import Carousel from '../components/Carousel/Carousel'
import Carousel2 from '../components/Carousel/Carousel2';
import Carosuel3 from '../components/Carousel/Carosuel3';
import Carousel4 from '../components/Carousel/Carousel4';
import Carousel5 from '../components/Carousel/Carousel5';
import Carousel6 from '../components/Carousel/Carousel6';
const MainHome = () => {

  const [loading, setLoading] = useState(true)


  const ShowData = () =>{
    return(
      <div>
      <Carousel/>
        <Carousel2/>
        <Carosuel3/>
        <Carousel4/>
        <Carousel6/>
    </div>
    )
  }
  const Spinner = () =>{
    return(
      <div className=""  style={{display:"flex", justifyContent:"center", alignItems:"center", minHeight:"500px"}}>
      <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    </div>
    )
  }
  setTimeout(() => {
    setLoading(false)
    // console.log("myVariable is now true");
}, 3000);
  return (
    <>
    {loading?<Spinner/>:<ShowData/>}
    </>
  )
}

export default MainHome
