import React from 'react';

const UserOutput = (props) => {
    return(
        <div className="user-output">
            <h2>User User Output</h2>
            <p>{props.output}</p>
        </div>
    );
}

export default UserOutput;