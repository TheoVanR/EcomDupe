import React from 'react';

const CloseBtn = ({ onClick }) => {
    return (
        <button onClick={onClick} className="text-neutral text-xs bg-gray-100 px-4 mr-4 py-3 rounded-full"
        >
            X Close
        </button>
    );
};



export default CloseBtn;