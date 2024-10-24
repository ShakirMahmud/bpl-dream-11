import banner from '../../assets/banner-main.png'
import bg_shadow from '../../assets/bg-shadow.png'
const Banner = ({handleCoinClick}) => {
    return (
        <div className="w-[82.5%] mx-auto bg-cover relative md:py-16 py-8 bg-[#131313] overflow-hidden rounded-3xl"
        style={{backgroundImage:`url(${bg_shadow})`}}>
            <div className="relative z-10 text-white text-center flex flex-col items-center  w-3/4 mx-auto">
                <img className='mb-6' src={banner} alt="" />
                <h1 className='font-[700] md:text-4xl text-2xl mb-4'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className='md:text-2xl text-[#FFFFFFB3] mb-6'>Beyond Boundaries Beyond Limits</p>
                <div className='p-2 border border-[#E7FE29] bg-[#FFFFFF0D] rounded-2xl'>
                    <button
                    onClick={handleCoinClick}
                     className='rounded-xl bg-[#E7FE29] text-[#131313] font-[700] px-5 py-4'>Claim Free Credit</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;