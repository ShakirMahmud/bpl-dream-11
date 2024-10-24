import footer_logo from '../../assets/logo-footer.png'
const Footer = () => {
    return (
        <div className='bg-[#06091A] text-white'>

            <div className="w-[82.5%] flex justify-center flex-col items-center mx-auto   ">
                <img className='mt-60' src={footer_logo} alt="" />
                <div className='mt-16 mb-16 flex md:flex-row flex-col justify-between lg:space-x-40'>
                    <div className='flex justify-around '>
                        <div className='w-2/3'>
                            <h4 className='text-lg font-[600] mb-4'>About Us</h4>
                            <p className='text-[#FFFFFF99]'>We are a passionate team dedicated to providing the best services to our customers.</p>
                        </div>
                        <div>
                            <h4 className="text-lg font-[600] mb-4">Quick Links</h4>
                            <ul className="list-disc list-inside text-[#FFFFFF99]">
                                <li><a href="">Home</a></li>
                                <li><a href="">Service</a></li>
                                <li><a href="">About</a></li>
                                <li><a href="">Contact</a></li>
                            </ul>
                        </div>

                    </div>
                    <div className=' flex flex-col mx-auto mt-6 md:mt-0'>
                        <h4 className='text-lg font-[600] mb-4 '>Subscribe</h4>
                        <p className='text-[#FFFFFF99] mb-3'>Subscribe to our newsletter for the latest updates.</p>
                        <form className='flex '>
                            <input className='rounded-bl-xl rounded-tl-xl px-6 py-3 placeholder:text-[#13131366]' placeholder='Enter Your email' type="text" />
                            <button className="px-6 py-3 font-[700] rounded-tr-xl rounded-br-xl text-black text-base bg-gradient-to-r from-pink-400 to-yellow-400">
                                Subscribe
                            </button>

                        </form>
                    </div>
                </div>
            </div>
            <div className='py-8 border-t' style={{ borderColor: '#ffffff26' }}>
                <p className='text-center text-[#FFFFFF99]'>@2024 All Rights Reserved to Md. Shakir Mahmud.</p>

            </div>
        </div>
    );
};

export default Footer;