import { useState } from 'react'
import './App.css'
import SelectedBtn from './components/Players/SelectedBtn'
import Banner from './components/StaticSections/Banner'
import Footer from './components/StaticSections/Footer'
import Navbar from './components/StaticSections/Navbar'
import Newsletter from './components/StaticSections/Newsletter'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [coin, setCoin] = useState(0);
  const handleCoinClick = () => {
    const newCoin = coin + 500000;
    setCoin(newCoin);
    toast.success('500,000 coins added to your account!');
  }
  const handleNewCoin = (price) => {
    setCoin(coin - price);
  }
  const handleNewCoinAfterDeletion = (price) => {
    setCoin(coin + price);
  }

  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} toastStyle={{ backdropFilter: 'none' }}></ToastContainer>
      {/* header section  */}
      <Navbar coin={coin}></Navbar>
      {/* banner section  */}
      <Banner
        handleCoinClick={handleCoinClick}></Banner>
      {/* selected section  */}
      <SelectedBtn
        handleNewCoinAfterDeletion={handleNewCoinAfterDeletion}
        handleNewCoin={handleNewCoin}
        coin={coin}
      ></SelectedBtn>
      {/* newsletter section  */}
      <Newsletter></Newsletter>
      {/* footer section  */}
      <Footer></Footer>
    </>
  )
}

export default App
