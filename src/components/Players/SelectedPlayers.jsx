import { AiOutlineDelete } from "react-icons/ai";
import PropTypes from 'prop-types';

const SelectedPlayers = ({ player, handleDeletion }) => {
    const { name, image, battingType, biddingPrice } = player;
    return (
        <>
            <div className="p-6 flex flex-col mt-6 border border-[#1313131A] rounded-2xl bg-white shadow-lg">
                <div className="flex justify-between">
                    <div className='flex gap-6'>
                        <img className='w-20 h-20 rounded-2xl' src={image} alt="" />
                        <div className='flex flex-col justify-between'>
                            <h4 className='text-2xl font-[600]'>{name}</h4>
                            <p className='text-base text-[#131313B3]'>{battingType}</p>
                            <p className='text-base text-[#131313B3]'>Price: ${biddingPrice}</p>
                        </div>
                    </div>
                    <button
                        onClick={()=>handleDeletion(player)}
                        className="text-3xl text-red-600"><AiOutlineDelete /></button>
                </div>
            </div>
        </>
    );
};

SelectedPlayers.propTypes = {
    player: PropTypes.object.isRequired,
    handleDeletion: PropTypes.func.isRequired,

};
export default SelectedPlayers;