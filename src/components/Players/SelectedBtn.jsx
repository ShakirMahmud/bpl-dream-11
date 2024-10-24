import { useEffect, useState } from 'react';
import AvailablePlayers from './AvailablePlayers';
import SelectedPlayers from './SelectedPlayers';

const SelectedBtn = () => {
    const [players, setPlayers] = useState([]);
    const [visibleSection, setVisibleSection] = useState(true);

    const availableSection = () => {
        setVisibleSection(true);
    }
    const selectedSection = () => {
        setVisibleSection(false);
    }

    useEffect((() => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }), [])

    return (
        <div className='mb-80 mt-20  w-[82.5%] mx-auto'>
            <div
                className=" flex justify-between items-center"
            >
                <h3 className="text-2xl font-[700]">Available Players</h3>
                <div>
                    <button
                        onClick={availableSection}
                        className={`px-5 py-4 rounded-tl-xl rounded-bl-xl ${visibleSection
                            ? 'bg-[#E7FE29] text-black font-[700]' // Highlight active button
                            : 'text-[#13131399] border border-[#1313131A]'
                            } `}
                    >
                        Available
                    </button>
                    <button
                        id="selected_btn"
                        onClick={selectedSection} // Switch to Selected Players
                        className={`px-5 py-4  border-l-0 rounded-tr-xl rounded-br-xl ${!visibleSection
                            ? 'bg-[#E7FE29] text-black font-[700]' // Highlight active button
                            : 'text-[#13131399] border border-[#1313131A]'
                            }`}
                    >
                        Selected ()
                    </button>
                </div>
            </div>
            <div className="mt-10 ">
                {visibleSection ? (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {
                            players.map(player => <AvailablePlayers
                                key={player.playerId}
                                player={player}
                            ></AvailablePlayers>)
                        }
                    </div>
                ) : (
                    <SelectedPlayers></SelectedPlayers>
                )}
            </div>
        </div >
    );
};

export default SelectedBtn;
