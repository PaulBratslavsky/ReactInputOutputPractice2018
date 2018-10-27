import React from 'react';

const UserInput = (props) => {
    return(
        <div className="user-input">
            <h2>User User Input</h2>
            <label>What is your name?</label>
            <input type="text" value={props.output}  onChange={props.onChangeInput}/>
            <button onClick={props.onClickHandle}>Click Me</button>
        </div>
    );
}

export default UserInput;