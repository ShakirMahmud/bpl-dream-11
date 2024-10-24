import './App.css'
import SelectedBtn from './components/Players/SelectedBtn'
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
