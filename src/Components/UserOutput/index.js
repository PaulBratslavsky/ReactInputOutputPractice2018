import React from 'react';

const UserOutput = (props) => {
    return(
        <div className="user-output">
            <p>{props.output}</p>
        </div>
    );
}

export default UserOutput;