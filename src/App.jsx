import { useState } from 'react'
import './App.css'
import SelectedBtn from './components/Players/SelectedBtn'
import Banner from './components/StaticSections/Banner'
import Footer from './components/StaticSections/Footer'
import Navbar from './components/StaticSections/Navbar'
import Newsletter from './components/StaticSections/Newsletter'

function App() {
  const [coin, setCoin]=useState(0);
    const handleCoinClick=()=>{
        const newCoin = coin+100000;
        setCoin(newCoin);
    }

  return (
    <>
    {/* header section  */}
    <Navbar coin={coin}></Navbar>
    {/* banner section  */}
    <Banner handleCoinClick={handleCoinClick}></Banner>
    {/* selected section  */}
    <SelectedBtn></SelectedBtn>
    {/* newsletter section  */}
    <Newsletter></Newsletter>
    {/* footer section  */}
    <Footer></Footer>
    </>
  )
}

export default App
