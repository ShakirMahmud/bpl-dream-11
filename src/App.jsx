import './App.css'
import AvailablePlayers from './components/Players/AvailablePlayers'
import SelectedPlayers from './components/Players/SelectedPlayers'
import Banner from './components/StaticSections/Banner'
import Footer from './components/StaticSections/Footer'
import Navbar from './components/StaticSections/Navbar'
import Newsletter from './components/StaticSections/Newsletter'

function App() {


  return (
    <>
    {/* header section  */}
    <Navbar></Navbar>
    {/* banner section  */}
    <Banner></Banner>
    {/* available player section  */}
    <AvailablePlayers></AvailablePlayers>
    {/* selected player section  */}
    <SelectedPlayers></SelectedPlayers>
    {/* newsletter section  */}
    <Newsletter></Newsletter>
    {/* footer section  */}
    <Footer></Footer>
      
    </>
  )
}

export default App
