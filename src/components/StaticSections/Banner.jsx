import banner from '../../assets/banner-main.png'
const Banner = () => {
    return (
        <div className="w-[82.5%] mx-auto relative md:py-16 py-8 bg-[#131313] overflow-hidden rounded-3xl">

            <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] 
             bg-gradient-to-br from-white to-blue-600/60 
             opacity-100 rounded-full blur-3xl z-0"></div>



            <div className="relative z-10 text-white text-center flex flex-col items-center  w-3/4 mx-auto">
                <img className='mb-6' src={banner} alt="" />
                <h1 className='font-[700] md:text-4xl text-2xl mb-4'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className='md:text-2xl text-[#FFFFFFB3] mb-6'>Beyond Boundaries Beyond Limits</p>
                <div className='p-2 border border-[#E7FE29] bg-[#FFFFFF0D] rounded-2xl'>
                    <button className='rounded-xl bg-[#E7FE29] text-[#131313] font-[700] px-5 py-4'>Claim Free Credit</button>
                </div>
            </div>


            <div className="absolute -top-20 -right-20 w-[300px] h-[300px] 
             bg-gradient-to-br from-white to-pink-500/60
             opacity-100 rounded-full blur-3xl z-0"></div>
        </div>
    );
};

export default Banner;