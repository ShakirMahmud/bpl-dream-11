
import bg_shadow from '../../assets/bg-shadow.png'
const Newsletter = () => {
    return (
        <div className='relative w-[82.5%] mx-auto'>
            <div className='bg-[#FFFFFF26]  border border-[#1313131A] absolute -top-40 rounded-3xl p-4 w-full'>
            <div className="  bg-white bg-cover rounded-3xl md:py-20 flex flex-col items-center"
                style={{ backgroundImage: `url(${bg_shadow})` }}>
                <h4 className='text-3xl font-[700] mb-4'>Subscribe to our Newsletter</h4>
                <p className='text-[#131313B3] mb-6 text-xl font-[500]'>Get the latest updates and news right in your inbox!</p>
                <form className=''>
                    <input className='rounded-xl border w-[25rem] border-[#13131326] mr-4 px-7 py-4 placeholder:text-[#13131366]' placeholder='Enter Your email' type="text" />
                    <button className="px-7 py-4 font-[700] rounded-xl  text-black text-base bg-gradient-to-r from-pink-400 to-yellow-400">
                        Subscribe
                    </button>
                </form>
                
            </div>
            </div>
        </div>
    );
};

export default Newsletter;