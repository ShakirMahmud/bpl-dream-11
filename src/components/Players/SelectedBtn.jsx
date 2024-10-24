import { useState } from 'react';

const SelectedBtn = () => {
    const[visibleSection, setVisibleSection] = useState(true);
    const availableSection=()=>{
        setVisibleSection(true);
    }
    const selectedSection=()=>{
        setVisibleSection(false);
    }

    return (
        <div className='mb-80 mt-20  w-[82.5%] mx-auto'>
            <div
                className=" flex justify-between items-center"
            >
                <h3 className="text-2xl font-[700]">Available Players</h3>
                <div>
                    <button
                        onClick={availableSection} 
                        className={`px-5 py-4 font-[700] ${visibleSection
                                ? 'bg-[#E7FE29] text-black' // Highlight active button
                                : 'text-[#13131399] border border-[#1313131A]'
                            } rounded-tl-xl rounded-bl-xl`}
                    >
                        Available
                    </button>
                    <button
                        id="selected_btn"
                        onClick={selectedSection} // Switch to Selected Players
                        className={`px-5 py-4 ${!visibleSection
                                ? 'bg-[#E7FE29] text-black' // Highlight active button
                                : 'text-[#13131399] border border-[#1313131A]'
                            } border-l-0 rounded-tr-xl rounded-br-xl`}
                    >
                        Selected ()
                    </button>
                </div>

            </div>
            {/* Content Section */}
            <div className="mt-10 w-full">
                {visibleSection ? (
                    <div className="p-8 bg-white shadow-lg rounded-xl">
                        <h4 className="text-xl font-[600]">Available Players List</h4>
                        {/* List of Available Players */}
                        <ul className="mt-4 space-y-2">
                            <li>Player 1</li>
                            <li>Player 2</li>
                            <li>Player 3</li>
                            <li>Player 4</li>
                        </ul>
                    </div>
                ) : (
                    <div className="p-8 bg-white shadow-lg rounded-xl">
                        <h4 className="text-xl font-[600]">Selected Players List</h4>
                        {/* List of Selected Players */}
                        <ul className="mt-4 space-y-2">
                            <li>Player A</li>
                            <li>Player B</li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SelectedBtn;
