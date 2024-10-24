import { BsFlagFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import PropTypes from 'prop-types';
const AvailablePlayers = ({ player, handleChosePlayers }) => {
    const { image, name, country, role, battingType, bowlingType, biddingPrice } = player;
    return (
        <div className='md:p-4 p-2 border border-[#1313131A] rounded-2xl'>
            <div className="card ">
                <figure>
                    <img
                        className='h-[450px] w-full rounded-2xl object-cover'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="mt-6 border-b">
                    <h2 className="card-title"> <CgProfile /> {name}</h2>
                    <div className="flex justify-between ">
                        <p className="flex items-center space-x-3"> <BsFlagFill /> <span></span> {country}</p>
                        <p className="px-2 py-2 bg-[#1313130D] rounded-lg text-center my-4">{role}</p>
                    </div>
                </div>
                <div className="mt-4">
                    <p className="text-base font-[700]">Rating</p>
                    <div className="flex justify-between mt-3">
                        <p className="text-base font-[700]">{battingType}</p>
                        <p className="text-base text-[#131313B3]">{bowlingType}</p>
                    </div>
                    <div className="flex justify-between mt-3">
                        <p className="text-base font-[700]">Price: ${biddingPrice}</p>
                        <button
                        onClick={()=>handleChosePlayers(player)}
                        className="border border-[#1313131A] rounded-lg px-4 py-2">Choose Player</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

AvailablePlayers.propTypes = {
    players: PropTypes.arrayOf(PropTypes.object),
    handleChosePlayers: PropTypes.func.isRequired,
    player: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
        battingType: PropTypes.string.isRequired,
        bowlingType: PropTypes.string.isRequired,
        biddingPrice: PropTypes.number.isRequired,
    }),
};

export default AvailablePlayers;