import React from 'react';

const SelectedPlayers = () => {
    return (
        <div>
            <div className="p-8 bg-white shadow-lg rounded-xl">
                        <h4 className="text-xl font-[600]">Selected Players List</h4>
                        {/* List of Selected Players */}
                        <ul className="mt-4 space-y-2">
                            <li>Player A</li>
                            <li>Player B</li>
                        </ul>
                    </div>
        </div>
    );
};

export default SelectedPlayers;