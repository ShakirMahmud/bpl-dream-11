import coin_icon from '../../assets/coin.png'
import logo from '../../assets/logo.png'
import PropTypes from "prop-types";
const Navbar = ({coin}) => {
    
    return (
        <div className="w-[82.5%] mx-auto my-8 flex flex-col md:flex-row md:justify-between items-center space-y-4">
            <div className=''>
                <img src={logo} alt="" />
            </div>
            <div className='flex flex-col md:flex-row items-center'>
                <div className=''>
                    <ul className='flex text-base text-[#131313B3] md:space-x-12 space-x-6  md:mr-12'>
                        <li><a href="">Home</a></li>
                        <li><a href="">Fixture</a></li>
                        <li><a href="">Teams</a></li>
                        <li><a href="">Schedules</a></li>
                    </ul>
                </div>
                <div
                 className='flex space-x-2 border border-[#1313131A] rounded-xl px-5 py-4 mt-4 md:mt-0 font-[600]'>
                    <span className='mr-2'>{coin}</span> Coin  <img className='w-6' src={coin_icon}/>
                </div>
            </div>
        </div>
    );
};

Navbar.propTypes = {
    coin: PropTypes.number.isRequired,
};

export default Navbar;