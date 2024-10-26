import { useEffect, useState } from 'react';
import AvailablePlayers from './AvailablePlayers';
import SelectedPlayers from './SelectedPlayers';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

const SelectedBtn = ({ coin, handleNewCoin, handleNewCoinAfterDeletion }) => {
    const [players, setPlayers] = useState([]);
    const [visibleSection, setVisibleSection] = useState(true);
    const [chosePlayer, setChosePlayer] = useState([]);

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

    const handleChosePlayers = (player) => {
        const isAlreadyChosen = chosePlayer.find(p => p.playerId === player.playerId);

        if (chosePlayer.length > 5) {
            toast.error("You can't add more than 6 players!");
            return;
        }
        if (coin < player.biddingPrice) {
            toast.error(`Failed to buy ${player.name}. You don't have enough coins!`);
            return;
        }

        if (isAlreadyChosen) {
            toast.warn(`${player.name} is already added!`);
            return;
        }

        setChosePlayer(prevPlayers => [...prevPlayers, player]);
        handleNewCoin(player.biddingPrice);
        toast.success(`${player.name} added successfully!`);
        console.log(chosePlayer.length)
    };
    const handleDeletion = (deletedPlayer) => {
        const remainingPlayers = chosePlayer.filter(player => player.playerId !== deletedPlayer.playerId);
        setChosePlayer(remainingPlayers);
        toast.success(`${deletedPlayer.name} removed successfully and ${deletedPlayer.biddingPrice} coins added to your account back!`);
        handleNewCoinAfterDeletion(deletedPlayer.biddingPrice);
    }
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='mb-80 mt-8 md:mt-16  w-[82.5%] mx-auto'>
            <div
                className={`sticky top-[6.65rem] bg-white/50 backdrop-blur-md z-50 flex justify-between items-center ${scrolled ? 'py-4' : 'py-0'}`}>
                <h3 className="text-2xl font-[700]">{visibleSection ? 'Available Players' : `Selected Players (${chosePlayer.length}/6)`}</h3>
                <div>
                        <div className="flex flex-col md:flex-row w-full">
                            <button
                                onClick={availableSection}
                                className={`flex-1 px-5 py-4 md:border-r-0 md:rounded-none md:rounded-tl-xl md:rounded-bl-xl rounded-xl ${visibleSection
                                    ? 'bg-[#E7FE29] text-black font-[700]'
                                    : 'text-[#13131399] border border-[#1313131A]'
                                    }`}
                            >
                                Available
                            </button>
                            <button
                                onClick={selectedSection}
                                className={`flex-1 px-5 py-4 md:border-l-0 md:rounded-none md:rounded-tr-xl md:rounded-br-xl rounded-xl mt-3 md:mt-0 ${!visibleSection
                                    ? 'bg-[#E7FE29] text-black font-[700]'
                                    : 'text-[#13131399] border border-[#1313131A]'
                                    } whitespace-nowrap`}
                            >
                                Selected ({chosePlayer.length})
                            </button>
                        </div>
                    </div>
            </div>
            <div className="mt-10 ">
                {visibleSection ? (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {
                            players.map(player => <AvailablePlayers
                                key={player.playerId}
                                player={player}
                                handleChosePlayers={handleChosePlayers}
                            ></AvailablePlayers>)
                        }
                    </div>
                ) : (
                    <div>
                        {
                            chosePlayer.map(player => <SelectedPlayers key={player.playerId}
                                handleDeletion={handleDeletion}
                                player={player}></SelectedPlayers>)
                        }
                        <div className='p-2 border mt-6 border-[#E7FE29] bg-[#FFFFFF0D] rounded-2xl w-fit'>
                            <button
                                onClick={availableSection}
                                className='rounded-xl bg-[#E7FE29] text-[#131313] font-[700] px-5 py-4'>Add More Player</button>
                        </div>
                    </div>
                )}
            </div>
        </div >
    );
};

SelectedBtn.propTypes = {
    coin: PropTypes.number,
    handleNewCoin: PropTypes.func,
    handleNewCoinAfterDeletion: PropTypes.func,
};

export default SelectedBtn;
