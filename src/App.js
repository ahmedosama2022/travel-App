import React, {useEffect, useState} from 'react'
import './App.css'
import NavBar from './Component/NavBar'
import Home from './Component/Home'
import Main from './Component/Main'
import Footer from './Component/Footer'
import RingLoader from "react-spinners/RingLoader"
const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [])
  return (
    <div>
     {loading ?
  <div className="preloaderr">
   <RingLoader color="#36d7b7"  loading={loading} height={100}  size={138}speedMultiplier={1} />
  </div> :
  <>
   <NavBar/>
      <Home/>
      <Main/>
      <Footer/>
  </>
}
    </div>
  )
}

export default App


