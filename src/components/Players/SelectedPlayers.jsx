import PropTypes from 'prop-types';

const SelectedPlayers = ({player}) => {
    const {name} = player;
    // console.log(chosePlayer)
    return (
        <div>
            <div className="p-8 bg-white shadow-lg rounded-xl">
                        <h4 className="text-xl font-[600]">Selected Players List</h4>
                        {/* List of Selected Players */}
                        <ul className="mt-4 space-y-2">
                            <li>{name}</li>
                            <li>Player B</li>
                        </ul>
                    </div>
        </div>
    );
};

SelectedPlayers.propTypes = {
    // chosePlayer: PropTypes.func.isRequired,  
};
export default SelectedPlayers;